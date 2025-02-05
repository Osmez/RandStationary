"use client"
import { NavLinks } from '@/app/ui/nav-links';
import RandFooter from '@/app/ui/footer';
import "./globals.css";
import { useContext, useState } from "react";
import {LanguageContext} from './Context/LanguageContext';
import { CartProvider } from './Context/cart';
import { UsersProvider, useUsers } from './Context/usersContext';

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
      <body className='bg-white dark:bg-gray-700'>
        <LanguageContext.Provider value={lang}>
          <UsersProvider>
            <CartProvider>
              <NavLinks setAr={SetLangAr} setEn={SetLangEn}/>              
              {children}
            </CartProvider>
          </UsersProvider>
        </LanguageContext.Provider>
      
      </body> 
    </html>
  );
}
