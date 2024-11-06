<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make('admin123'),
            'is_admin' => true,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
