"use client"

import RandFooter from '@/app/ui/footer';
import "./globals.css";
import { NavLinks } from '@/app/ui/nav-links';
import { useEffect, useState } from "react";
import {LanguageContext} from './Context/LanguageContext';
import { CartProvider } from './Context/cartContext';
import { UserProvider } from './Context/usersContext';

export default function RootLayout({children}) {

  const [ lang, setLang] = useState("en");
 
  const SetLangAr = ()=>{
    changeLang("ar");
    window.localStorage.getItem("language");
  }
  const SetLangEn = ()=>{
    changeLang("en");
    window.localStorage.getItem("language");
  }

  function changeLang(lng){
    localStorage.setItem("language",lng)
    setLang(lng);
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
