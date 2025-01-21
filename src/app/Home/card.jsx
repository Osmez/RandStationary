"use client"

import { motion } from "framer-motion"

export default function Card({name}){
  
  return  (
  <div className='w-1/4 m-2 min-h-10 p-2 bg-slate-300 flex flex-col transition-all hover:scale-125'>
    <div className='w-full  h-32 bg-slate-400 rouded-lg'></div>
    <p>{name}</p>
  </div>)
}

/*
 <motion.div  
 variants={{hidden:{opacity:0,x:'100px'},
 vis:{opacity:1,x:'0'}}
} 
className="min-w-[150px] w-1/3 h-[300px] m-2 relative overflow-hidden" 
initial="hidden"
 whileInView="vis" 
 transition={{duration:0.5,delay:0.2}}>
      <div
      class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#3ba5a0_20deg,transparent_120deg)]"
    ></div>
          
            <div
 
  className="w-[98%] h-[98%] mt-[3px] mx-auto bg-slate-500 relative"  ></div>
  </motion.div>*/