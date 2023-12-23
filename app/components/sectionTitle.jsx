import React from 'react'
// import semiLogoImage from '../../images/semi-logo.webp';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeftOutlined } from '@mui/icons-material'


const SectionTitle = ({title,showAll,href,linkWord}) => {
  return (
    <div className='section-title w-[100%] flex justify-between items-center'>
          <h3 className="text-gray-500 font-bold text-3xl">{title}</h3>         
          {
            showAll&&(
                <Button className="flex items-center bg-orange-300 hover:bg-orange-300">
                     <Link
                 href={href}
                >
              عرض الكل {linkWord}
          </Link>

          <ArrowLeftOutlined/>
          
                </Button>
            )
          }
    </div>

  )
}

export default SectionTitle