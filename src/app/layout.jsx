"use client"
import { NavLinks } from '@/app/ui/nav-links';
import RandFooter from '@/app/ui/footer';
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";
import  Transition  from "./ui/transition";
import { createContext, useContext, useState } from "react";
import {LanguageContext} from './Context/LanguageContext';


export default function RootLayout({children}) {

  const pathname = usePathname();
  const [lang, setLang] = useState('en');

  const SetLangAr = ()=>{
      setLang('ar');
  }
  const SetLangEn = ()=>{
    setLang('en');
  }

  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
      </head>
      <body className='bg-white dark:bg-gray-700'>
        <LanguageContext.Provider value={lang}>
        <NavLinks setAr={SetLangAr} setEn={SetLangEn}/>
          <AnimatePresence mode="wait">
          <Transition key={pathname} />
        
          
          
          {children}
          <RandFooter />
          </AnimatePresence>

        </LanguageContext.Provider>
      
      </body> 
    </html>
  );
}
