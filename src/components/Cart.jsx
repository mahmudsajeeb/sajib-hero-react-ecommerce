import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Cart() {
  const {cartArray} = useLoaderData()
   console.log(cartArray)
  return (
    <div>
    <h1>This is sajib</h1>
    {cartArray.length}
    </div>
  )
}
