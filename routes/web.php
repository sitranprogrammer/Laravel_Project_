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

// Route::get('hihi/{users}','loai@first');
Route::get('hihi','loai@showloai');
Route::get('/', function () {
    return view('index');
});


// Route::get('user/{id}', function($id) {
//    echo "ID của user là : " . $id;
   
//     return view('index',['id'=>$id]);
// });
