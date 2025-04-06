"use client"
import { NavLinks } from '@/app/ui/nav-links';
import RandFooter from '@/app/ui/footer';
import "./globals.css";
import { useState } from "react";
import {LanguageContext} from './Context/LanguageContext';
import { CartProvider } from './Context/cart';
import { UsersProvider } from './Context/usersContext';



export default function RootLayout({children}) {

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
      </head>
      <body className='bg-white dark:bg-stone-700 min-h-screen'>
        <LanguageContext.Provider value={lang}>
          <UsersProvider>
            <CartProvider>
              <NavLinks lang={lang} setAr={SetLangAr} setEn={SetLangEn} />  

               {children}
              <RandFooter lng={lang} />
            </CartProvider>
          </UsersProvider>
        </LanguageContext.Provider>
      
      </body> 
    </html>
  );
}
