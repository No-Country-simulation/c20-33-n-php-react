<?php

namespace App\Http\Controllers\Auth;

use App\Jobs\Auth\SendVerificationEmailJob;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;
use Illuminate\Support\Facades\URL;

class VerificationController extends Controller
{
    public function verify(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);

        // Verificar que el hash coincida con el email del usuario
        if (!hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            return response()->json(['message' => 'El enlace de verificación no es válido.'], 403);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email ya verificado'], 400);
        }

        $user->markEmailAsVerified();
        event(new Verified($user));

        $user->status = 'active';
        $user->save();

        return response()->json(['message' => 'Email verificado con éxito']);
    }

    public function resend(Request $request)
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email ya verificado'], 400);
        }

        $domain = env('FRONTEND_URL', URL::to('/'));
        $verificationUrl = $domain . '/verify-email/' . $user->id . '/' . sha1($user->getEmailForVerification());

        SendVerificationEmailJob::dispatch($user, $verificationUrl);

        return response()->json(['message' => 'Se ha enviado un nuevo enlace de verificación']);
    }

}
