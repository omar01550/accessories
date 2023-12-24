import CategoryCard from '../components/categoryCard'
import Container from '../components/container'
import React from 'react'
import CategoryImage from '../../images/categoey.webp';

const AllCategories = () => {
  return (
    <main>
       <Container className="">
           <h3 className='text-center font-bold capitalize py-6 text-3xl text-orange-500'>جميع الاقسام</h3>

           <div className="mt-4 flex justify-around items-center flex-wrap py-5">
                 {
                 [1,2,3,4,5,6,7,8,9,1,,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
                 .map((category) => {
                  return (
                     <CategoryCard
                      href={'/category/2890898'}
                      image={CategoryImage}
                    
                     />
                  )
                 })
                 }
           </div>
       </Container>
    </main>
  )
}

export default AllCategories