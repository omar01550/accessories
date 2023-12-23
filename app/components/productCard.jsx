import React from 'react'
import CateoryImage from '../../images/card.svg';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import CategoryCard from './categoryCard';
  

const ProductCard = () => {
  return (
    <Card className="w-[270px] mt-6 ">
        <Image

         src={CateoryImage}
        />
         <CardHeader>
            <CardTitle>
            طقم كارتير لوف ذهبي
            </CardTitle>
             <CardDescription>
             طقم كارتير لوف ذهبيأنيق جودة عاليةيتكون من قطعتين : سلسال / حلقمتوفر باللون الذهبيتوصيل سريع لجميع مدن المملكةالتوصيل عن طريق شركة سمسا للمنزل بـ 25 ر...

             </CardDescription>
         </CardHeader>
    </Card>
  )
}

export default ProductCard