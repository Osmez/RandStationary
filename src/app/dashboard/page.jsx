'use client'
import { useEffect, useState } from "react"
import { getUserData } from '@/app/actions/getData';
import { useContext } from "react";
import { LanguageContext } from '../Context/LanguageContext';
import {useUsers} from '../Context/usersContext';
import texts from '@/app/texts.json';
import Link from "next/link";



export default function Dashboard(){

  const lang = useContext(LanguageContext);
  const {addTheUser,theUser} = useUsers();
  
  useEffect(
    ()=>{
      let er = null;
      const updateData = async ()=>{
        const updated = await getUserData();
        if(updated == 'error'){
          er = 'error';
        }else{
          addTheUser(updated);
        }
      }
      
      if(!Object.hasOwn(theUser.user,"user")){
        updateData();
      }
    }
  )

  return (
    <section className='w-full min-h-screen pt-[200px] px-12'>
    {Object.hasOwn(theUser.user,"user") ? 
    <div dir={texts.dir[lang]} className={`w-full h-fit flex flex-col justify-center bg-stone-100 dark:bg-stone-950 rounded-md p-2 sm:flex-row md:text-sm`}>
      <div className='w-full mr-0 mb-2 h-fit bg-stone-200 dark:bg-stone-800bg-stone-800 p-2 rounded-md sm:w-3/12 sm:mr-2  sm:mb-0'>
          <h4 className={`mb-4 ${texts.textdir[lang]}`}><b>{texts.welcome[lang]}</b><br></br><span>{theUser.user.user.name}</span></h4>
          <h4 className={`mb-4 ${texts.textdir[lang]}`}><b>{texts.email[lang]}</b><br></br><span>{theUser.user.user.email}</span></h4>
          <h4 className={`mb-4 ${texts.textdir[lang]}`}><b>{texts.phone[lang]}</b><br></br><span>{theUser.user.user.phone}</span></h4>
          {theUser.user.user.verified? '':<Link className="w-fit block h-[50px] p-2 rounded-md relative text-center border-2 border-stone-400 bg-green-200 dark:bg-green-900"  href={'/confirm'}>{texts.confirmyourmail[lang]}</Link>}
      </div>
      <div className='w-full p-2 min-h-[300px] sm:ml-0 rounded-md bg-stone-300 dark:bg-stone-900 sm:w-9/12 '>
        {theUser.user.bills.map(
          (item,id) => {
            const a = JSON.parse(item.items);
            return  <div key={id} className='p-2 bg-stone-200 dark:bg-stone-950 rounded-md'>
                      <div className='mb-2' >
                        <b className={`${texts.textdir[lang]}`}>{texts.dop[lang]}:</b> {item. created_at.substring(0,10)}<span className='font-bold ml-2'>{texts.totalprice[lang]}: {item.price}</span>
                      </div>
                      {a.map( (item,id) =>  <div key={id} className={`border-2 border-stone-800 p-2 mb-2 rounded-md ${texts.textdir[lang]}`}>
                                              <span>{texts.itemname[lang]}:{item.name}</span>
                                              <br></br>
                                              <span>{texts.itemprice[lang]}:{item.price}</span>
                                              <br></br>
                                              <span>{texts.totalprice[lang]}:{item.amount}</span>
                                            </div>)}
                    </div>})
        }
      </div>
    </div>:<p>texts.waitloading["en"]</p>  }             
</section>
    )
}