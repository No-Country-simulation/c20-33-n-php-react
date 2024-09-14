<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordResetToken extends Model
{
    use HasFactory;

    protected $table = 'password_reset_tokens';

    public $timestamps = false;

    protected $primaryKey = null;

    public $incrementing = false;

    protected $keyType = 'string';

    // Otras propiedades
    protected $fillable = ['email', 'token', 'created_at'];
}
