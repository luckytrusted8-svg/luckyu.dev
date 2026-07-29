<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Only seeds what the application needs to boot (roles + one admin
     * account). Content tables (services, portfolios, blog, etc.) are
     * intentionally NOT seeded with dummy data — see CLAUDE.md project
     * rule: "Tidak boleh ada data dummy." All content is entered through
     * the admin dashboard.
     */
    public function run(): void
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);

        $admin = User::firstOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@luckyu.dev')],
            [
                'name' => 'Lucky Ubaidillah',
                'password' => Hash::make(env('ADMIN_PASSWORD', 'change-this-password')),
                'email_verified_at' => now(),
            ]
        );

        if (! $admin->hasRole($adminRole)) {
            $admin->assignRole($adminRole);
        }
    }
}
