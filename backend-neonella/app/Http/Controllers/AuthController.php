<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    public function login(Request $request) {
        $validatedCredentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
            'remember' => ['boolean'],
        ]);

        $remember = $validatedCredentials['remember'] ?? false;

        unset($validatedCredentials['remember']);

        if (!Auth::attempt($validatedCredentials, $remember)) {
            return response([
                'message' => 'Invalid credentials',
            ], 422);
        }

        $user = $request->user();
        if (!$user->is_admin) {
            Auth::logout();
            return response([
                'message' => 'Unauthorized Access',
            ], 403);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => new UserResource($user),
            'token' => $token
        ]);
    }

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

    public function getUser(Request $request) {
        return new UserResource($request->user());
    }
}
