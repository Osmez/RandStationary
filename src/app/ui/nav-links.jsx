'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {LanguageContext} from '../Context/LanguageContext'
import { useContext } from 'react'
import texts from '@/app/Home/texts.json'

export function NavLinks({setAr, setEn}){

  const lang = useContext(LanguageContext);
  const pathname = usePathname()
    return  <nav className='fixed min-h-16 z-30 w-full flex justify-between align-middle p-5 bg-white dark:bg-gray-700'>
      <div className='h-fit'>
        <h2 className='font-extrabold text-xl'><span className=' inline-block animate-PressOne'>R</span><span className='inline-block animate-PressTwo'>a</span><span className='inline-block animate-PressThree'>n</span><span className='inline-block animate-PressFour'>d</span>-Stationery</h2>
      </div>
      <div className='flex justify-start align-middle'>
      <Link className={`link ${pathname === '/' ? 'active' : ''} font-bold mx-2 p-2`} href="/">
              {
                lang == 'en'? texts.Home[0]:texts.Home[1]
              }
            </Link>

      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}font-bold mx-2 p-2`}
        href="/about"
      >
              {
                lang == 'en'? texts.About[0]:texts.About[1]
              }
      </Link>
      {
        lang == 'en'? <button className=' p-2 border-2 border-stone-300 rounded-lg dark:bg-slate-500' onClick={setAr}>عربي</button>: <button onClick={setEn}>En</button>
      }
      
     
      </div>
     </nav>
}