<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin', 'guard_name' => 'api']);
        $sellerRole = Role::create(['name' => 'seller', 'guard_name' => 'api']);
        $buyerRole = Role::create(['name' => 'buyer', 'guard_name' => 'api']);
    }
}
