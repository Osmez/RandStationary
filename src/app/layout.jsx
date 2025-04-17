"use client"

import {LanguageContext} from './Context/LanguageContext';
import RandFooter from '@/app/ui/footer';
import "./globals.css";
import { CartProvider } from './Context/cartContext';
import { UserProvider } from './Context/usersContext';
import { NavLinks } from '@/app/ui/nav-links';
import { useState } from "react";

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
          <UserProvider>
            <CartProvider>
              <NavLinks lang={lang} setAr={SetLangAr} setEn={SetLangEn} />  
                {children}
              <RandFooter lng={lang} />
            </CartProvider>
          </UserProvider>
        </LanguageContext.Provider>
      </body> 
    </html>
  );
}
