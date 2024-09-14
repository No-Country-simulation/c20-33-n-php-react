<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\Auth\SendPasswordResetEmailJob;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use App\Models\PasswordResetToken;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    public function forgotPassword(Request $request)
    {
        try {
            $user = User::where('name', $request->name)
                ->orWhere('email', $request->email)
                ->first(['name', 'email']);

            if ($user && isset($user->email)) {
                $token = Str::random(60);

                // Construir la URL con el token
                $domain = env('FRONTEND_URL', URL::to('/'));
                $url = $domain . '/reset-password?token=' . $token;

                // Configurar datos para el correo
                $data = [
                    'url' => $url,
                    'email' => $user->email,
                    'title' => "Recuperar Contraseña",
                    'body' => 'Por favor, haz clic en el enlace para restablecer tu contraseña:'
                ];

                SendPasswordResetEmailJob::dispatch($data);

                PasswordResetToken::updateOrCreate(
                    ['email' => $user->email],
                    ['token' => $token, 'created_at' => now()]
                );

                return response()->json([
                    'success' => true,
                    'message' => 'Hemos enviado un enlace para restablecer tu contraseña a la dirección de correo registrada.'
                ]);
            } else {
                return response()->json(['success' => false, 'message' => 'Credenciales inválidas.']);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Error interno del servidor.'], 500);
        }
    }

    public function verifyToken(Request $request)
    {
        $request->validate(['token' => 'required']);

        $resetToken = PasswordResetToken::where('token', $request->token)->first();

        if (!$resetToken || Carbon::now()->greaterThan(Carbon::parse($resetToken->created_at)->addMinutes(15))) {
            PasswordResetToken::where('token', $request->token)->delete();
            return response()->json(['success' => false, 'message' => 'El enlace de restablecimiento ha expirado o es inválido.']);
        }

        return response()->json(['success' => true, 'message' => 'El enlace de restablecimiento es válido.']);
    }

    public function updatePassword(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'token' => 'required',
                'password' => 'required|string|min:6|confirmed',
            ]);

            $resetToken = PasswordResetToken::where('token', $request->token)->first();

            if (!$resetToken) {
                return response()->json(['success' => false, 'message' => 'Token inválido o expirado.']);
            }

            $user = User::where('email', $resetToken->email)->first();

            if ($user) {
                $user->password = Hash::make($request->password);
                $user->save();

                PasswordResetToken::where('email', $resetToken->email)
                    ->where('token', $request->token)
                    ->delete();

                return response()->json(['success' => true, 'message' => 'Tu contraseña se ha restablecido exitosamente.']);
            } else {
                return response()->json(['success' => false, 'message' => 'Usuario no encontrado.']);
            }
        }

        return response()->json(['success' => false, 'message' => 'Método no permitido.'], 405);
    }

}
