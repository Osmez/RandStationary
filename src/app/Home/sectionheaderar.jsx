import { motion, px } from "framer-motion"

export default function SectionHeaderAR(){
    return(
        <div className='w-full min-h-[150px] relative'>
            <div className=' w-[50px] h-[50px] bg-orange-200 relative'>
                
            </div>
             <motion.h3 
               variants={{hide:{ transform:'scaleY(0)', right:'200px', transformOrigin:'top'}, vis:{ transform:['scaleY(0)','scaleY(1)','scale(1)'], right:['200px','200px','0']}}}
               className=' inline-block absolute text-[8vw] '
               initial="hide"
               whileInView="vis"
               transition={{duration:2,delay:0.2,times:[0,0.6,1]}}
            >
            {text}
            </motion.h3>
        </div>
    )
}