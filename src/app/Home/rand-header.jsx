"use client"
import hdrImage from './imgs/heading.png';
import Image from 'next/image';
import {LanguageContext} from '@/app/Context/LanguageContext';
import { useContext } from 'react';
import texts from '@/app/Home/texts.json';
import './goldanim.css';

export default function RandHeader(){ 
    
    const lang = useContext(LanguageContext);

    return <header className="w-full min-h-80 pt-32">
            <div className='"w-full  flex flex-row flex-wrap justify-center align-middle'>
                <div className="test" >
                    {
                        lang == 'en'? <><h2><span className=' text-[8vw]'>Rand</span></h2><h2 className='text-[8vw] text-gold' data-text="stationary"><span className=' gold-text__highlight' data-text="Stationary">Stationary</span></h2></>:texts.AppName[1]
                    }
               
                    {
                        lang == 'en'? texts.AppDescrip[0]:texts.AppDescrip[1]
                    }
                </div>
              
                <Image className='max-w-80 h-auto' src={hdrImage}/>
            </div>
           
           
      
    </header>
}