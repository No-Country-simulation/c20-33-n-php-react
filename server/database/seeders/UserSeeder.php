<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Nahuel',
            'surname' => 'Ripa',
            'phone' => '12345678',
            'ci' => '123456',
            'email' => 'nahuelripa@hotmail.com',
            'password' => '123456',
            'status' => 'active',
        ]);
        $admin->assignRole('admin');

    }
}
