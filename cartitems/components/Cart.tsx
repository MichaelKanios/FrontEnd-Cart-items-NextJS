'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { removeItem, incrementQty, decrementQty } from '../store/cartSlice'
import { useState } from 'react'
import OrderConfirmation from './OrderConfirmation'

export default function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [showConfirm, setShowConfirm] = useState(false)

  const completeOrder = () => {
    setShowConfirm(true) // ανοίγει το modal
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto my-10 relative">
      <h2 className="text-xl font-bold mb-4">🛒 Shopping Cart ({totalQuantity} items)</h2>

      {items.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}

      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(decrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">
                -
              </button>
              <button onClick={() => dispatch(incrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">
                +
              </button>
              <button onClick={() => dispatch(removeItem(item.id))} className="px-3 py-1 bg-red-600 text-white rounded">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
          <button
            onClick={completeOrder}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            ✅ Complete Order
          </button>
        </div>
      )}

      {showConfirm && <OrderConfirmation onClose={() => setShowConfirm(false)} />}
    </div>
  )
}
