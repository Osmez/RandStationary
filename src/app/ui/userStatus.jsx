'use client';

import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {useUsers} from '../Context/usersContext';
import Link from 'next/link';
import texts from  '../texts.json'
import { CheckUser } from '@/app/actions/checkUser';

export default function UserStatus({lang, change, isVis, font}){

    const [signed, setSigned] = useState(false);
    const { theUser } = useUsers();

    useEffect(
        ()=>{
            if(signed == false){
                const d = checU().then(res => {console.log(res,'res'),setSigned(res)});
                if(!signed && theUser.user){setSigned(true)}
                console.log(signed);
            }
           
        },[]
    )
    const checU = ()=> CheckUser();
    const box={
        borderRadius: "10px",
    }

    return(
        <div  className={'hidden sm:inline-block'}>
             <AnimatePresence initial={false}>
                {isVis == 'state' ? (
                    <motion.div
                        className={`fixed py-4 px-2 ${lang == "en"? 'top-[80px] right-[50px]':'top-[80px] left-[50px]'} z-50 w-44 min-h-16 h-fit bg-white border-2 border-gray-300 dark:bg-stone-700 dark:border-stone-500`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    >
                        {signed? <>
                            <Link className={`block ${font} mb-2 p-2 dark:bg-stone-800 rounded-md ${texts.textdir[lang]}`} href={'/dashboard'}>{texts.dashboard[lang]}</Link>
                        </>: <>
                            <Link className={`block ${font} mb-2 p-2 dark:bg-stone-800 rounded-md ${texts.textdir[lang]}`} href={'/login'} onClick={() => setIsVisible(!isVisible)} >{texts.login[lang]}</Link>
                            <Link className={`block ${font} p-2 dark:bg-stone-800 rounded-md ${texts.textdir[lang]}`} href={'/signup'} onClick={() => setIsVisible(!isVisible)} >{texts.signup[lang]}</Link>
                        </> }
                    
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <motion.button 
                className={`w-fit ${font} h-[50px] px-2 rounded-md relative text-center mx-2 border-2 border-stone-500 bg-green-200 dark:bg-green-900`} 
                style={{lineHeight:"50px"}}
                onClick={() => {isVis == 'state'? change(null):change('state')}}>
                {signed? texts.welcome[lang]:texts.guest[lang]}
            </motion.button>
        </div>
    )
}
