
import Container from '@/app/components/container'
import ProductCard from '@/app/components/productCard'
import React from 'react'

const Category = ({params}) => {
  console.log(params);
  return (
    <main>
        <Container>

        <h3 className='text-center font-bold capitalize py-9 text-3xl text-orange-500'>{params.id}</h3>
        <div className="mt-4 flex justify-around items-center flex-wrap py-5">
  {
     [1,2,3,4,5,6,7,8,9,1,23,4,5,6,7,8,9,12,3,4,5,6,7,8,1,2,3,45].map((ele) => {
      return (
         <ProductCard/>
      )
     })
  }
    </div>
        </Container>
    </main>
  )
}

export default Category