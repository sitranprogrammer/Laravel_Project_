<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class loai extends Controller
{
    public function showloai()
    {

      
        $users = DB::table('name1')->get();
        echo $users;
        return view('home', ['users'=> $users]);

        
    }
    // public function first($id)
    // {

      
    //     $users = DB::table('name1')->where('id',$id)->get();
    //     echo $users;
    //     return view('home', ['users'=> $users]);

        
    // }
}
