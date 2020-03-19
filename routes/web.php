<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('index','product@ShowProduct_ById');
// Route::get('/index','product@ShowProduct');


Route::get('/','product@ShowProduct');
Route::get('/product','product@ShowProduct_ById');

Route::get('/stone','product@stone');