import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string  
}


interface CartState {
  items: CartItem[]
  totalQuantity: number
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
 addItem(state, action: PayloadAction<{ id: number; name: string; price: number; image: string }>) {
  const existing = state.items.find(item => item.id === action.payload.id)
  if (existing) {
    existing.quantity++
  } else {
    state.items.push({ ...action.payload, quantity: 1 })
  }
  state.totalQuantity++
  state.totalAmount += action.payload.price
},

    removeItem(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        const item = state.items[index]
        state.totalQuantity -= item.quantity
        state.totalAmount -= item.price * item.quantity
        state.items.splice(index, 1)
      }
    },
    incrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        item.quantity++
        state.totalQuantity++
        state.totalAmount += item.price
      }
    },
    decrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
        state.totalQuantity--
        state.totalAmount -= item.price
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addItem, removeItem, incrementQty, decrementQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
