
import ProductCard from '@/app/components/productCard'
import React from 'react'

const Category = () => {
  return (
    <div className="mt-4 flex justify-around items-center flex-wrap py-5">
  {
     [1,2,3,4,5,6,7,8,9,1,23,4,5,6,7,8,9,12,3,4,5,6,7,8,1,2,3,45].map((ele) => {
      return (
         <ProductCard/>
      )
     })
  }
    </div>
  )
}

export default Category