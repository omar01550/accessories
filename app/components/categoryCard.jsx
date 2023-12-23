
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryImage from '../../images/categoey.webp'


const CategoryCard = ({href,image}) => {
  return (
    <Link href={href} className='w-[200px]  h-[200px ] border-1 border-solid border-gray-500 shadow-md relative my-5'>
        <Image
         src={CategoryImage}
         alt="not found"
         className="w-[100%] h-[100%]"
         

        />
    </Link>
  )
}

export default CategoryCard