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
        <h2 className="text-2xl font-bold text-green-600 mb-2">✅ Order Confirmed</h2>
        <p className="text-gray-600 mb-4">We hope you enjoy your food!</p>

        <ul className="divide-y divide-gray-200 mb-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>

        <p className="text-lg font-bold text-right">Order Total: ${totalAmount.toFixed(2)}</p>

        <button
          onClick={handleNewOrder}
          className="mt-6 w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}
