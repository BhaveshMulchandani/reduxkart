import React from 'react'
import ProductCard from '../components/ProductCard'
import Nav from '../components/Nav'

const Product = () => {
  return (
    <>
    <Nav/>
    <div className='flex justify-center'>
    <ProductCard/>
    </div>
    </>
  )
}

export default Product