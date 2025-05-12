'use client'
import React,{ useContext } from 'react';
import texts from '../texts.json';
import {LanguageContext} from '../Context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function PDFTools(){
    
    const lang = useContext(LanguageContext);

    return (
        <section className="w-full min-h-screen p-4 ">
            <div className="w-full h-[200px]"></div>
            <div className='p-2 m-auto h-[200px] w-[300px] border-2 border-green-800 rounded-md flex flex-row justify-center'>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <h3 className='text-5xl text-center'>Rand</h3>
                    <h3 className='text-center text-2xl' dir={texts.dir[lang]}>{texts.pdftools[lang]}</h3>
                </div>
                <div className='w-1/2 '>
                    <Image unoptimized={true} className='w-full h-auto m-auto mt-4' src="/icons/pdficon.png" width={50} height={50} alt="pdf icon image" />
                </div>
            </div>
            
            <div className='w-5/6 m-auto flex flex-row items-center justify-center'>
                <Link className='p-4 inline-block rounded-md m-2 text-center text-white dark:text-black bg-green-700' href={'./pdftools/breakpdf'} >
                    {texts.breakpdf[lang]}
                </Link>
                <Link className='p-4 m-2 rounded-md text-center bg-green-700 text-white dark:text-black' href={'/pdftools/mergepdf'} >
                    {texts.mergepdf[lang]}
                </Link>

            </div>
        </section>
    )
}

//text-5xl