"use client"
import React, {  useState } from 'react';
import itms from './content.json';
import Container from '../Container/Container';
import texts from '@/app/texts.json';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const box={
   borderRadius: "10px",
}


export default function Content({lng, ub, mad}){
   
   const the_items = itms[lng];
   const [theItem, setTheItem] = useState(null);

   const viewItem = (item)=>{
      setTheItem(item);
   }
   const closeViewItem = ()=>{
      setTheItem(null);
   }
   
   return (
     <>
       <div className="w-full h-1vh"></div>

       <Image
         className="w-10/12 h-auto m-auto rounded-md"
         src={"/baag.png"}
         unoptimized={true}
         width={100}
         height={100}
         alt="boy with ok"
       />

       <div className="bg-white dark:bg-stone-800 p-2">
         <div className='w-4/5 min-h-[300px] h-fit p-2 m-auto bg-stone-200 dark:bg-stone-700 rounded-md flex flex-row justify-center items-center' dir={texts.dir[lng]}>
            <div  className='w-2/3 h-full flex flex-col justify-center items-center text-center text-4xl'>
              <h3 className={`${lng == "en" ? ub.className : mad.className}`} dir={texts.dir[lng]}>{texts.pdftools[lng]}</h3>
              <h3 className={`text-2xl ${lng == "en" ? ub.className : mad.className}`} dir={texts.dir[lng]}>{texts.pdftext[lng]}</h3>
              <h3 className={`text-2xl ${lng == "en" ? ub.className : mad.className}`} dir={texts.dir[lng]}>{texts.pdfwarn[lng]}</h3>
              <Image unoptimized={true} className='w-[100px] h-auto' src={'/icons/pdffiles.png'} width={50} height={50} alt={"icon of pdf files"} />
            </div>
            
               <Link href={'/pdftools'} className='p-2 bg-green-800 rounded-md '>
               {'>'}
               </Link>
           
         </div>
         <h2
           style={{ fontWeight: 900 }}
           className={`text-center text-[8vw]  after:w-6 after:h-8  dark:text-stone-200 ${
             lng == "en" ? ub.className : mad.className
           }`}
         >
           {texts.products[lng]}
         </h2>
         <p
           className={`text-center text-[2vw] dark:text-stone-200 ${ub.className}`}
         >
           {texts.best[lng]}
         </p>

         <section
           className="w-full py-4 flex flex-wrap justify-center align-top dark:bg-stone-800"
           dir={`${lng == "en" ? "ltl" : "rtl"}`}
         >
           {the_items.map((itm, id) => (
             <Container
               key={id}
               items={itm}
               lng={lng}
               view={viewItem}
               close={closeViewItem}
               font={ub.className}
               arfont={mad.className}
             />
           ))}
         </section>
         <AnimatePresence initial={false}>
           {theItem ? (
             <motion.div
               className={`fixed py-4 px-2 top-0 sm:top-[80px] flex flex-col-reverse sm:flex-row sm:justify-between left-[10%] z-50 w-3/4 min-h-16 h-[80vh] bg-white border-2 border-stone-500 dark:bg-stone-700`}
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0 }}
               style={box}
               key="box"
             >
               <div className="h-full w-1/2 text-center">
                 <Image
                   unoptimized={true}
                   src={theItem.img}
                   className="h-1/2 -z-10 w-auto sm:h-full sm:w-auto absolute m-auto max-w-full max-h-full"
                   width={100}
                   height={100}
                   alt="sds sved ss"
                 />
               </div>
               <div className=" flex flex-col  p-2 h-fit w-full sm:w-1/4 rounded-md text-stone-900">
                 <button
                   onClick={() => {
                     closeViewItem();
                   }}
                 >
                   <Image
                     src={"/exit.png"}
                     className="w-10 h-10 float-end"
                     width={50}
                     height={50}
                     alt="close icon"
                   />
                 </button>
                 <div className="w-full bg-slate-300 dark:bg-stone-500 rounded-md mt-4 p-2">
                   <h3 style={{ fontWeight: 800 }}>{texts.desc[lng]}:</h3>
                   <h2>{theItem.name}</h2>
                   <h3 style={{ fontWeight: 800 }}>{texts.price[lng]}:</h3>
                   <h2>{theItem.price}</h2>
                 </div>
               </div>
             </motion.div>
           ) : null}
         </AnimatePresence>
       </div>
     </>
   );
}

