import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

function saveToLocalStorage(state: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('reduxState', JSON.stringify(state))
  }
}

function loadFromLocalStorage() {
  if (typeof window !== 'undefined') {
    const stateStr = localStorage.getItem('reduxState')
    return stateStr ? JSON.parse(stateStr) : undefined
  }
  return undefined
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
