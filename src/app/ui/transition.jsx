import { motion } from "framer-motion"

export default function Transition(){
    return <>
    <motion.div
    className="fixed w-[50%] h-full bg-red-500 z-30"
    initial={{y:'0'}}
    animate={{y:'100%'}}
    exit={{y:'0'}}
    transition={{duration:1,ease:'easeInOut'}}
    ></motion.div>
   
    </>
    
}