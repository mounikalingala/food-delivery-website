import { createContext, useState } from 'react'
import Home from './pages/Home'

import './App.css'
import { food_items } from './Food'


export const dataContext = createContext()

function App() {
  let [input, setInput] = useState("")
  let [cate, setCate] = useState(food_items)
  let [showCart, setShowCart] = useState(false)
  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart, setShowCart
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        <Home />
      </dataContext.Provider>
    </div>
  )
}

export default App
