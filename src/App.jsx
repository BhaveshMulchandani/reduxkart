import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Nav from './components/Nav'

const App = () => {
  return (
    <>

    <div className='bg-slate-800 text-white h-screen text-2xl flex justify-center gap-4'>

    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    

    </div>
    </>
  )
}

export default App