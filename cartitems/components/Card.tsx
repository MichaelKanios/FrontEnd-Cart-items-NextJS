"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addItem, incrementQty, decrementQty } from "@/store/cartSlice";
import Image from "next/image";


const Card = ({ data }: { data: any[] }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const getCartItem = (id: number) => cartItems.find((i) => i.id === id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => {
        const inCart = getCartItem(item.id);

        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col"
          >
            <div className="relative">
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-xl mb-4 w-full"
              />

              {!inCart ? (
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image.desktop,
                      })
                    )
                  }
                  className="flex  absolute bottom-1 left-1/2 transform -translate-x-1/2 
                    bg-white border rounded-2xl px-4 py-2 text-nowrap text-black hover:border-rose-700 hover:text-rose-700 hover:cursor transition"
                >
                  <span>
                    <Image 
                      src="/assets/images/icon-add-to-cart.svg" 
                      alt="add" 
                      width={18} 
                      height={18}
                      className="inline mr-4 "
                    />
                    
                    
                    </span>Add to Cart
                </button>
              ) : (
                <div className="text-sm absolute  -bottom-1 left-1/2 transform -translate-x-1/2 
                flex items-center gap-8 bg-rose-700 border rounded-2xl px-2 py-2 shadow">
                  <button
                    onClick={() => dispatch(decrementQty(item.id))}
                   className="w-6 h-6 rounded-full border-2 border-gray-300 hover:bg-white transition hover:text-rose-700"
                  >
                    -
                  </button>
                  <span className="font-semibold">{inCart.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQty(item.id))}
                    className="w-6 h-6 rounded-full border-2 border-gray-300 hover:bg-white transition hover:text-rose-700"
                  >
                    +
                  </button>
                </div>
              )}
            </div>

            <p className="text-gray-400 mt-8">{item.category}</p>
            <p className="text-gray-900 font-semibold">{item.name}</p>
            <p className="text-red-700">${item.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
