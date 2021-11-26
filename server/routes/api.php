<?php

use App\Http\Controllers\TrelloController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/getboard',[TrelloController::class, 'getBoard']);
Route::post('/createBoard',[TrelloController::class, 'createBoard']);
Route::post('/deleteBoard',[TrelloController::class, 'deleteBoard']);
Route::get('/getSingleBoard',[TrelloController::class, 'getSingleBoard']);
Route::post('/updateBoard',[TrelloController::class, 'updateBoard']);

Route::get('/getLists',[TrelloController::class, 'getLists']);

Route::post('/createList',[TrelloController::class, 'createList']);

Route::get('/getCards',[TrelloController::class, 'getCards']);

Route::post('/createCard',[TrelloController::class, 'createCard']);