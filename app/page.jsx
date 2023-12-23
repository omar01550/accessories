import React from 'react'
import CategoriesList from './components/categoriesList'
import Container from './components/container'
import BestSaller from './components/bestSaller'

export let metadata ={
   title:"home page",
   description:"xsswart home page"
}

const Page = () => {
  return (
    <mai className="home-page">
      <Container>
           <CategoriesList/>
           <BestSaller/>
      </Container>
    </mai>
  )
}

export default Page