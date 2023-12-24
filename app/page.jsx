import React from 'react'
import CategoriesList from './components/categoriesList'
import Container from './components/container'
import BestSaller from './components/bestSaller'
import OffersSlider from './components/offerSlider'

export let metadata ={
   title:"مشمشة",
   description:"مشمشه افضل الأكسسوارات الحريمى "
}

const Page = () => {
  return (
    <mai className="home-page">
      <Container>
           <CategoriesList/>
           <BestSaller/>
           <OffersSlider/>
      </Container>
    </mai>
  )
}

export default Page