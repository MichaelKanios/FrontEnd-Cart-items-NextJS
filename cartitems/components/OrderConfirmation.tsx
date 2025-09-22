'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { clearCart } from '../store/cartSlice'

export default function OrderConfirmation({ onClose }: { onClose: () => void }) {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleNewOrder = () => {
    dispatch(clearCart())
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
        <img src="./assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="" />
        <h2 className="text-2xl font-bold text-black mb-2">Order Confirmed</h2>
        <p className="text-gray-400 mb-4 text-sm">We hope you enjoy your food!</p>

        <ul className="divide-y divide-gray-200 mb-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <div className='flex'>
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-4 " />
                <div>
                   <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>

                </div>
               
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <div className='flex justify-between items-center'>
           <p className="text-sm  ">Order Total</p>
           <p className='font-bold'>${totalAmount.toFixed(2)}</p>

        </div>   

        <button
          onClick={handleNewOrder}
          className="mt-6 w-full bg-rose-700 text-white py-3 rounded-xl font-semibold hover:bg-rose-900 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}
