import Container from './container'
import React from 'react'
import SectionTitle from './sectionTitle'
import ProductCard from './productCard'

const BestSaller = () => {
  return (
    <section className='w-[100%]'>
        
             <SectionTitle
              href={'/best-saller'}
              linkWord={"الاكثر مبيعا"}
              showAll={true}
              title={"الاكثر مبيعا"}
              
             />

<div className="mt-4 flex justify-around items-center flex-wrap py-5">
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
</div>
             
        
         
    </section>
  )
}

export default BestSaller