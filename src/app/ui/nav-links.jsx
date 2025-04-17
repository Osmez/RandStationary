'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence ,  motion } from 'framer-motion';
import { Ubuntu, Mada } from 'next/font/google';
import {page_name, setPageName} from './pageName';
import UserStatus from './userStatus';
import Link from 'next/link';
import BuyItems from '@/app/BuyItems/BuyItems';
import texts from '@/app/texts.json';

const box={
    borderRadius: "10px",
}

const ub = Ubuntu({
  weight: '400',
  subsets: ['latin']
});

const mad = Mada({
  weight: '400',
  subsets: ['arabic']
});

export function NavLinks({ user, lang ,setAr, setEn}){
  
  const [whatVisible, setWhatVisible] = useState('none');
  const [menuVisible, setMenuVisible] = useState(false);

  const changeVisible = (vis)=>{
    setWhatVisible(vis);
  }

  const fnt = lang == "en"? ub.className:mad.className;
 
  const pathname = usePathname();

  if(page_name != pathname && whatVisible != 'none'){
    setPageName(pathname);
    changeVisible('none');
  }

    return  (
        <nav className={`fixed min-h-16 z-40  w-full flex justify-between align-middle p-5 bg-white dark:bg-stone-700 ${lang == 'en'? 'flex-row':'flex-row-reverse'}`}>
            <div className='h-fit'>
                <h2 className='font-extrabold text-xl dark:text-stone-200'>
                    <span className=' inline-block animate-PressOne'>R</span>
                    <span className='inline-block animate-PressTwo'>a</span>
                    <span className='inline-block animate-PressThree'>n</span>
                    <span className='inline-block animate-PressFour'>d</span>
                    -Stationery
                </h2>
            </div>
            <div className={`flex justify-between align-middle dark:text-stone-200 ${lang == 'en'? 'flex-row':'flex-row-reverse'}`}>
                <Link className={`link hidden ${fnt} sm:inline-block ${pathname === '/' ? 'text-green-700 border-b-2 border-b-green-700' : ''} font-bold mx-2 p-2`} href="/" style={{lineHeight:"30px"}}>
                    {
                        texts.home[lang]
                    }
                </Link>
                <UserStatus lang={lang} font={fnt} change={changeVisible} isVis={whatVisible}/>
                <BuyItems lang={lang} font={fnt} change={changeVisible} isVis={whatVisible} />
                {
                    lang == 'en'? <button className=' w-[50px] h-[50px] border-2 border-stone-500 rounded-lg dark:bg-green-900' onClick={setAr}>عربي</button>: <button onClick={setEn} className=' w-[50px] h-[50px] border-2 border-stone-400 rounded-lg dark:bg-green-900'>En</button>
                }
                <motion.button 
                    className={`flex flex-col justify-end items-center sm:hidden w-[50px] h-[50px] rounded-md relative text-center mx-2 border-2 border-stone-500 `} 
                    style={{lineHeight:"50px"}}
                >
                    <span className='block w-4/5 rounded-md bg-stone-500 h-1 mb-2'></span>
                    <span className='block w-4/5 rounded-md bg-stone-500 h-1 mb-2'></span>
                    <span className='block w-4/5 rounded-md bg-stone-500 h-1 mb-2'></span>
                </motion.button>
            </div>
            <AnimatePresence initial={false}>
                {menuVisible ? 
                    (
                        <motion.div
                            className={`fixed flex flex-col justify-center py-4 px-2 top-0 left-0 z-40  h-full w-full bg-white border-2 border-stone-500 dark:bg-stone-700`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            style={box}
                            key="box"
                        >
                            <button onClick={()=>{setMenuVisible(false)}}>Close</button>
                            <Link className={`link ${fnt} ${pathname === '/' ? 'text-green-700 border-b-2 border-b-green-700' : ''} font-bold mx-2 p-2`} 
                                href="/" 
                                style={{lineHeight:"30px"}}
                            >
                            {
                                texts.home[lang]
                            }
                            </Link>

                            
                            <Link className={`link ${fnt} ${pathname === '/login' ? 'text-green-700 border-b-2 border-b-green-700' : ''} font-bold mx-2 p-2`} 
                                href="/login" 
                                style={{lineHeight:"30px"}}
                            >
                            {
                                texts.login[lang]
                            }
                            </Link>

                            <Link
                                className={`link ${fnt} ${pathname === '/signup' ? 'text-green-700 border-b-2 border-b-green-700' : ''}font-bold mx-2 p-2`}
                                href="/signup"
                                style={{lineHeight:"30px"}}
                            >
                                {
                                texts.signup[lang]
                                }
                            </Link>
                     
                        </motion.div>
                    ) 
                : null}
            </AnimatePresence>
        </nav>
    )
}