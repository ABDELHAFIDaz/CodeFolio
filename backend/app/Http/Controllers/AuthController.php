<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){

        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:8|max:30'
        ]);

        $token = Auth::attempt($credentials);

        if (!$token) {

            return response()->json([
                'message' => "Invalid Inputs",
                'isFound' => false
            ], 401);        
        }

        return response()->json([
            'message' => "Valid Input",
            'isFound' => true,
            'token' => $token
            ], 200);
    }

    public function logout(){
        Auth::logout();
        return response()->json(['message' => 'Logged out']);
    }
}