<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/skills', [SkillController::class, 'getSkills']);

Route::middleware('auth:api')->group(function () {
    Route::post('/addProject', [ProjectController::class, 'store']);
    Route::post('/delete', [ProjectController::class, 'delete']);
    Route::post('/logout', [AuthController::class, 'logout']);
});