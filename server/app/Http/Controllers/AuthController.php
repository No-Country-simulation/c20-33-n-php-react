<?php

namespace App\Http\Controllers;

use App\Jobs\Auth\SendVerificationEmailJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'ci' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:2|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'phone' => $request->phone,
            'ci' => $request->ci,
            'email' => $request->email,
            'password' => $request->password,
            'status' => 'pending',
        ]);

        $domain = env('FRONTEND_URL', URL::to('/'));
        $verificationUrl = $domain . '/verify-email/' . $user->id . '/' . sha1($user->getEmailForVerification());
        SendVerificationEmailJob::dispatch($user, $verificationUrl);

        $user->assignRole('buyer');
        $role = $user->getRoleNames()->first();
        $token = $user->createToken('Personal Access Token')->plainTextToken;


        return response()->json([
            'success' => true,
            'data' => [
                'token' => $token,
                'user' => [
                    'name' => $user->name,
                    'status' => $user->status,
                    'roles' => $role,
                ],
            ],
            'message' => 'Registration successful.',
        ], 200);
    }


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();
        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $token = $user->createToken('Personal Access Token')->plainTextToken;
        $role = $user->getRoleNames()->first();

        return response()->json([
            'success' => true,
            'data' => [
                'token' => $token,
                'user' => [
                    'name' => $user->name,
                    'status' => $user->status,
                    'role' => $role,
                ],
            ],
            'message' => 'Login successful.',
        ], 200);
    }


    public function logout(Request $request)
    {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'success' => true,
                'message' => 'Logout successful.',
            ], 200);
        }

        return response()->json([
            'success' => false,
            'message' => 'Unauthenticated.',
        ], 401);

    }
}
