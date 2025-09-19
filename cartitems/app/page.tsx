import Image from "next/image";
import data from "@/data.json"


export default function Home() {
  return (
    <div className="flex flex-col ">
        <h1 className="text-3xl">Desserts</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          
      {data.map((data,id)=>(
        <img key={data.id} src={data.image.desktop}></img>
      ))}
    </div>

    </div>
    
 
  )
}
