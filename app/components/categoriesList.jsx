"use client"
import React from 'react'
import SectionTitle from './sectionTitle'
import CategoryCard from './categoryCard'

const CategoriesList = () => {
  return (
    <div className="categories-list py-6">
          <SectionTitle title={"أقسام المتجر"} showAll={true} linkWord={"الأقسام"} href={'/all-categories'}/>

          <div className="mt-4 flex justify-around items-center flex-wrap">
          <CategoryCard
           href="./category/202002"
           
          />
          <CategoryCard
           href="./category/9584859"
           
          />
          <CategoryCard
           href="./category/9854774"
           
          />
          <CategoryCard
           href="./category/3405903485"
           
          />
          <CategoryCard
           href="./category/48904895"
           
          />
          <CategoryCard
           href="./category/938349859"
           
          />
          <CategoryCard
           href="./category/938349859"
           
          />
          
          
          </div>
    </div>
  )
}

export default CategoriesList