"use client"

import Image from "next/image";
import data from "@/data.json"
import Card from "@/components/Card";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div className=" min-h-screen bg-rose-50 p-6">        
        <h1 className="text-3xl font-bold mb-6 text-black" >Desserts</h1>   
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6"> 
          <div className="lg:col-span-3">
            <Card data={data}/>
          </div>  
          <div className=" text-black xl:-mt-22 rounded-2xl p-6 ">
            <Cart />
            </div> 
          
  </div>
 
</div>

)}
