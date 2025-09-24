"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {removeItem,clearCart} from "@/store/cartSlice";
import Image from "next/image";
import { useState } from "react";
import OrderConfirmation from "./OrderConfirmation";

export default function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const completeOrder = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
      <h2 className="text-xl font-bold mb-4 text-rose-700">
        Your Cart ({totalQuantity})
      </h2>

      {items.length === 0 && (
        <div className="flex flex-col justify-center">
          <Image 
            src="/assets/images/illustration-empty-cart.svg" 
            alt="EmptyCart"
            width={150}
            height={100}
            className="mx-auto mb-4"
          />
          
          <p>Your added items will appear here</p>

        </div>
        
      )}

      {/* Cart Items */}
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  {item.quantity}x ${item.price.toFixed(2)}{" "}
                  <span className="font-medium text-gray-700">
                    = ${(item.quantity * item.price).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>

            {/* Remove Btn */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="text-gray-400 hover:text-red-600"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {/* Total + Confirm */}
      {items.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold flex justify-between">
            <span>Order Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </p>
          <div className="flex justify-center items-center gap-2 mt-2">

          <Image 
            src="/assets/images/icon-carbon-neutral.svg" 
            alt="carbon-icon"
            width={20}
            height={20}
          />
        
            <p className="text-xs text-gray-500 mt-2">
             This is a <span className="font-bold">carbon-neutral</span>{" "}
            delivery
          </p>

          </div>

          

          <button
            onClick={completeOrder}
            className="mt-4 w-full bg-rose-700 text-white py-2 rounded-xl hover:bg-rose-800 transition"
          >
            Confirm Order
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <OrderConfirmation
          items={items}
          totalAmount={totalAmount}
          onClose={() => {
            setShowConfirmation(false);
            dispatch(clearCart());
          }}
        />
      )}
    </div>
  );
}
