import { motion } from "framer-motion"

export default function SectionHeader({text}){
    return(
        <div className='w-full min-h-[150px]'>
            <div className=' w-1/4 h-[100px] border-black relative float-left'>
                
            </div>
            <div className=" inline-block relative w-3/4 float-left">
                <motion.h3 
                variants={{hide:{transform:'scaleY(0)',left:'200px',transformOrigin:'top'},vis:{transform:['scaleY(0)','scaleY(1)','scale(1)'],left:['200px','200px','0']}}}
                
                className=' inline-block absolute text-[8vw] '
                initial="hide"
                whileInView="vis"
                
                transition={{duration:2,delay:0.2,times:[0,0.6,1]}}
                >
                {text}
                </motion.h3>
            </div>
             
        </div>
    )
}