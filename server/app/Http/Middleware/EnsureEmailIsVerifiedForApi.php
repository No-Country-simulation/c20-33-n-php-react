<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureEmailIsVerifiedForApi
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->user() || !$request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Tu correo electrónico no está verificado.'], 403);
        }

        return $next($request);
    }
}
