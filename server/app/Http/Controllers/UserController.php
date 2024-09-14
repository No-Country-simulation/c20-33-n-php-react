<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        //
    }


    public function show(Request $request)
    {
        $user = $request->user();
 
        return response()->json([
            'success' => true,
            'message' => 'User data retrieved successfully.',
            'data' => $user->only(['id', 'name', 'surname', 'phone', 'ci', 'email', 'nit', 'status']),
        ], 200);

    }


    public function edit(Request $request)
    {
        $user = $request->user();
        
        return response()->json([
            'success' => true,
            'message' => 'User data retrieved successfully for editing.',
            'data' => $user->only(['id', 'name', 'surname', 'phone', 'ci', 'email', 'nit']),
        ], 200);
    }


    public function update(Request $request)
    {
        $user = $request->user(); 

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'surname' => 'sometimes|required|string|max:255',
            'phone' => 'sometimes|required|string|max:255',
            'ci' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:2|confirmed',
        ]);

        $user->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'User information updated successfully.',
        ], 200);
    }


    public function destroy(Request $request)
    {
        $user = $request->user();
    
        $user->status = 'inactive';
        $user->save();
    
        return response()->json([
            'success' => true,
            'message' => 'User status updated to inactive.',
            'data' => $user->only(['id', 'status']),
        ], 200);    
    }

}
