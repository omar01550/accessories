import React, { Children } from 'react'
import Container from './container'
import Image from 'next/image'
import LogoImage from '../../images/logo.webp';
import { Button } from '@/components/ui/button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Search } from '@mui/icons-material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const IconContainer = ({Children,className}) => {
     return (
           <div className={className+' w-[40px] h-[40px] bg-gray-300 rounded-full text-black'}>
                 {Children}
           </div>
     )
}

  

const Header = () => {
  return (
    <header>
         <Container className="flex justify-between items-center py-4 shadow-md">
            <Image 
            src={LogoImage}
            alt="not found"
            className='w-[80px] h-[40px] md:w-[120px] md:h-[60px]'
            />
         {/* input serch */}

<div className="hidden md:flex input-search w-[50%] items-center bg-white shadow-sm border-1 border-solid border-gray-700 rounded-md px-3 " >
    
    <Search className='text-gray-500'/>
    
<input type="text" name="search" id="search" 
placeholder='ابحث عن افضل المنتجات'
className=' bg-white text-black border-none outline-none h-[100%] w-[100%] mr-2 p-2'
/>

</div>
         {/* serch input end */}
            <div className="icons flex">
            
                 
            <div className={' w-[40px] h-[40px] bg-gray-100 rounded-full text-black flex justify-center items-center relative'}>
                      <ShoppingBagOutlinedIcon/>
                      <small className='bg-orange-300 w-[22px] h-[22px] flex justify-center items-center rounded-full text-white absolute -top-1 -right-2'>
                         4
                      </small>
            </div>
                 

                         <div className={' w-[40px] h-[40px] bg-gray-100 rounded-full text-black flex justify-center items-center mr-3'}>
                             <PersonAddAltOutlinedIcon/>
                         </div>
                 


            

            </div>
         </Container>
    </header>
  )
}

export default Header