<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\products;
class product extends Controller
{
   public function ShowProduct()
   {

      $users = products::get();
      // echo $users;
      return view('index', ['users' => $users]);
   }
   public function ShowProduct_ById()
   {
      // $id
      // $users = products::get()->where('id',$id);
      // // echo($users);
      // return view('product', ['users' => $users]);
      return view('product');
   }
   public function stone()
   {
      // $id
      // $users = products::get()->where('id',$id);
      // // echo($users);
      // return view('product', ['users' => $users]);
      return view('store');
   }
}
