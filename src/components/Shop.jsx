import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './Cards/ProductCard'
import { addToDb } from '../utilis/fakeDB'
 

export default function Shop() {
  const productData = useLoaderData()
   const addToCart = (id) =>{
    addToDb(id)
   }
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {
        productData.map(product =><ProductCard addToCart={addToCart} key={product.key} product={product} />)
        
      }
    </div>
  )
}
