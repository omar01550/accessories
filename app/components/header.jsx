import React from 'react'
import Container from './container'
import Image from 'next/image'
import LogoImage from '../../images/logo.webp';
import { Button } from '@/components/ui/button';
import { DarkMode, Person2Outlined, Search, ShoppingBagOutlined } from '@mui/icons-material';


  

const Header = () => {
  return (
    <header>
         <Container className="flex justify-between items-center py-4 shadow-md">
            <Image 
            src={LogoImage}
            alt="not found"
            className='w-[120px] h-[60px]'
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
            <div className="icons">
            <Button className="bg-orange-300 text-white rounded-full hover:bg-orange-300 hover:opacity-70 mx-3">
                 <DarkMode/>
            </Button>

            <Button className="bg-orange-300 text-white rounded-full hover:bg-orange-300 hover:opacity-70">
                 <Person2Outlined/>
            </Button>

            <Button className="bg-orange-300 text-white rounded-full hover:bg-orange-300 hover:opacity-70 mx-3">
                 <ShoppingBagOutlined/>
            </Button>

            

            </div>
         </Container>
    </header>
  )
}

export default Header