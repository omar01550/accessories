"use client"
import "./globals.css"
import React from "react";
import { useState,useEffect } from "react";
import Header from "./components/header";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { WhatsApp } from "@mui/icons-material";




export default function RootLayout({ children }) {
const [dark,setDark] = useState(false)


  return (
    <html lang="en" dir="rtl" >
      <head />
      <body >
        {/* whats app Link */}

<div className="text-white bg-orange-300 rounded-full w-[40px] h-[40px] flex justify-center items-center fixed right-10 md:right-16 bottom-28 cursor-pointer z-30">
<WhatsApp />
</div>


        {/* whats app Link */}

        <Header/>
{
   children
}

      </body>
    </html>
  )
}




