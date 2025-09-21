"use client"
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import Image from "next/image"
const Card =({data})=>{

  const dispatch = useDispatch()
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">               
                 {data.map((item)=>(
                  <div key={item.id} className="bg-white rounded-2xl shadow p-4">
  <div className="relative">
    <Image
      src={item.image.desktop}
      alt={item.name}
      width={300}
      height={200}
      className="rounded-xl mb-4 w-full"
    />   
    <button onClick={() =>
    dispatch(addItem({ id: item.id, name: item.name, price: item.price }))
  } className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 
                  bg-white border rounded-2xl px-3 py-1 text-gray-700  hover:bg-blue-700 transition">
      Add to Cart
    </button>
  </div>

  <p className="text-gray-400 mt-2">{item.category}</p>   
  <p className="text-gray-900">{item.name}</p>
  <p className="text-red-700">${item.price.toFixed(2)}</p>  
</div>
                                       
           
              
              
              ))}              
            </div>
    )
}
export default Card