import { motion } from "framer-motion"

export default function SectionHeaderAR({text, font}){
    return(
        <div className='w-full h-[40px]'>
            <div className='h-full relative'>
                <motion.h3 
                    variants={{hide:{transform:'scaleY(0)',right:'200px',transformOrigin:'top'},vis:{transform:['scaleY(0)','scaleY(1)','scale(1)'],right:['200px','200px','0']}}}
                    
                    className={`inline-block absolute text-3xl sm:text-5xl dark:text-stone-200 ${font}`}
                    initial="hide"
                    whileInView="vis"
                    style={{lineHeight:'75px'}}
                    transition={{duration:2,delay:0.2,times:[0,0.6,1]}}
                >
                   {text}
                </motion.h3>
            </div>
        </div>
    )
}