"use client"
import hdrImage from './imgs/heading.png';
import Image from 'next/image';
import { motion } from "framer-motion";
import './goldanim.css'; 
import path from 'path';


export default function RandHeader({lng, lali, ub, mad}){ 
   
    return(
        
        <header  
        className=" w-full min-h-80 h-lvh pt-32" >
            {lng == "en"? 
                <div className='w-full h-full fixed -z-10 text-center flex flex-col-reverse justify-end sm:flex-row sm:justify-center'>
                <div className='hidden sm:inline-block w-40 h-80  mx-2 rounded-md relative top-4 overflow-hidden'>
                    <motion.div
                        className='w-full h-full bg-blue-400 rounded-md absolute p-2 flex flex-col justify-between'
                        animate={{x:[0,0,100,100]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.3,0.5,1]}}
                    >   
                        <Image src={'/price.jpg'} className='w-full h-auto rounded-md' width={100} height={100} alt="item price" />
                        <h4 style={{fontWeight:900}} className={`text-5xl mt-4  text-center font-bolder ${ub.className}`}>Best<br/>Price</h4>
                    </motion.div>
                    <motion.div
                        className='w-full h-full bg-pink-500 rounded-md absolute p-2 flex flex-col justify-between'
                        animate={{x:[-200,-200,0,0,200]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.3,0.5,0.8,1]}}
                    >
                        <Image src={'/qual.jpg'} className='w-full h-auto rounded-md' width={100} height={100} alt="item price" />
                    <h4 style={{fontWeight:900}} className={`text-4xl  mt-4 text-center font-bolder ${ub.className}`}>Best<br/>Quality</h4>
                    </motion.div>
                    <motion.div
                        className='w-full h-full bg-green-500 rounded-md absolute p-2 flex flex-col justify-between'
                        animate={{x:[-400,-400,0,0]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.5,0.8,1]}}
                    >
                        <Image objectFit='conatin' src={'/std.jpg'} className='w-auto h-1/2 rounded-md' width={100} height={100} alt="item price" />
                        <h4 style={{fontWeight:900}} className={`text-5xl mt-4 text-center font-bolder ${ub.className}`}>Best<br/>Tools</h4>
                    
                    </motion.div>
                </div>
                <div>
                    <h2 style={{fontWeight:900}} className={`w-full text-center sm:text-left  text-[50px] ${ub.className}`}>Rand <br/> Stationery</h2>
                    <Image className='max-w-60 h-auto m-auto inline-block' src={hdrImage} alt={'header image for rand statinery'}/>
                </div>
            </div>
            :<div className='w-full h-full fixed -z-10 text-center flex flex-col-reverse sm:flex-row-reverse justify-end sm:justify-center'>
                <div className='hidden sm:inline-block w-40 h-80  mx-2 rounded-md relative top-4 overflow-hidden'>
                    <motion.div
                        className='w-full h-full bg-blue-400 rounded-md absolute p-2 flex flex-col justify-start'
                        animate={{x:[0,0,100,100]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.3,0.5,1]}}
                    >   
                        <Image src={'/price.jpg'} className='w-full h-auto rounded-md' width={100} height={100} alt="item price" />
                        <h4 style={{fontWeight:900}} className={`text-6xl mt-4  text-center font-bolder ${mad.className}`}>أفضل<br/>سعر</h4>
                    </motion.div>
                    <motion.div
                        className='w-full h-full bg-pink-500 rounded-md absolute p-2 flex flex-col justify-start'
                        animate={{x:[-200,-200,0,0,200]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.3,0.5,0.8,1]}}
                    >
                        <Image src={'/qual.jpg'} className='w-full h-auto rounded-md' width={100} height={100} alt="item price" />
                    <h4 style={{fontWeight:900}} className={`text-6xl  mt-4 text-center font-bolder ${mad.className}`}>أفضل<br/>جودة</h4>
                    </motion.div>
                    <motion.div
                        className='w-full h-full bg-green-500 rounded-md absolute p-2 flex flex-col justify-start'
                        animate={{x:[-400,-400,0,0]}}
                        transition={{duration:10, repeat: Infinity,times:[0,0.5,0.8,1]}}
                    >
                        <Image objectFit='conatin' src={'/std.jpg'} className='w-auto h-1/2 rounded-md' width={100} height={100} alt="item price" />
                        <h4 style={{fontWeight:900}} className={`text-6xl mt-4 text-center font-bolder ${mad.className}`}>أفضل<br/>أدوات</h4>
                       
                    </motion.div>
                </div>
                <div className='mx-2'>
                    <h2 style={{fontWeight:500}} className={`w-full text-center sm:text-right text-[100px] ${lali.className}`}>مكتبة  رند </h2>
                    <Image className='max-w-60 h-auto m-auto inline-block' src={hdrImage}/>
                </div>
            </div>}
            
        </header>
        )
    }