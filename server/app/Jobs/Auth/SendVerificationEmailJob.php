<?php
namespace App\Jobs\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class SendVerificationEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;
    
    protected $user;
    protected $verificationUrl;

    public function __construct(User $user, $verificationUrl)
    {
        $this->user = $user;
        $this->verificationUrl = $verificationUrl;
    }

    public function handle()
    {
        try {
            Mail::send('emails.verifyEmail', [
                'user' => $this->user, 
                'verificationUrl' => $this->verificationUrl
            ], function ($message) {
                $message->to($this->user->email)
                        ->subject('Confirma tu dirección de correo electrónico');
            });
        } catch (\Exception $e) {
            Log::error('Error al enviar el correo: ' . $e->getMessage());
        }
    }
}
