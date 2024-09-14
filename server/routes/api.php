<?php

use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//Registro
Route::post('register', [AuthController::class, 'register'])->name('register');

// Login y logout deben ser POST
Route::post('login', [AuthController::class, 'login'])->name('login');
//Route::post('logout', [AuthController::class, 'logout'])->name('logout');

//Contraseña
Route::post('forgot-password', [ResetPasswordController::class, "forgotPassword"]);
Route::post('reset-password', [ResetPasswordController::class, "updatePassword"]);
Route::post('verify-token', [ResetPasswordController::class, "verifyToken"]);

//Verificar usuario
Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'show'])->name('user.show');
        Route::get('/edit', [UserController::class, 'edit'])->name('user.edit');
        Route::put('/update', [UserController::class, 'update'])->name('user.update');
        Route::delete('/delete', [UserController::class, 'destroy'])->name('user.destroy');
    });

    Route::post('email/resend', [VerificationController::class, 'resend'])->name('verification.resend');

});


// Route::middleware(['auth:sanctum', 'verified.api'])->group(function () {
//     Route::get('/user', function (Request $request) {
//         return $request->user();
//     });
// });

