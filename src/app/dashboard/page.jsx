'use client'

import { getUserData } from '@/app/actions/getData';
import { useContext , useEffect } from "react";
import { LanguageContext } from '../Context/LanguageContext';
import {useUsers} from '../Context/usersContext';
import { redirect } from 'next/navigation';
import texts from '@/app/texts.json';
import Link from "next/link";
import BillItem from './BillItem';

export default function Dashboard(){

  const lang = useContext(LanguageContext);
  
  const { user } = useUsers();
  
  useEffect(()=>{if(user.user.loged == false){redirect('/')}})

  return (
    <section className='w-full min-h-screen pt-[200px] px-12 mb-6'>
        {user.user.loged? 
        <div className='w-full h-fit flex flex-col justify-center bg-stone-200 dark:bg-stone-950 rounded-md p-2 sm:flex-row md:text-sm'>
            <div className='w-full mr-0 mb-2 h-fit bg-stone-100 dark:bg-stone-800 p-2 rounded-md sm:w-3/12 sm:mr-2  sm:mb-0'>
                <h4 className='mb-4'>
                    <b>{texts.welcome[lang]}</b>
                    <br></br>
                    <span>{user.name}</span>
                </h4>
                <h4 className='mb-4'>
                    <b>{texts.email[lang]}</b>
                    <br></br>
                    <span>{user.email}</span>
                </h4>
                <h4 className='mb-4'>
                    <b>{texts.phone[lang]}</b>
                    <br></br>
                    <span>{user.phone}</span>
                </h4>
                {
                user.user.status? <Link>{texts.confirmyourmail[lang]}</Link>
                :''}
            </div>
            <div className='w-full p-2 min-h-[300px] sm:ml-0 rounded-md bg-stone-100 dark:bg-stone-900 sm:w-9/12 '>
                {
                    user.user.loged ? user.user.bills.map(
                    (item,id) => {const a = JSON.parse(item.items);console.log(a);return <div key={id} className='p-2 bg-stone-200 dark:bg-stone-950 rounded-md'><div className='mb-2'><b>Date Of Purchase:</b> {item. created_at.substring(0,10)}<span className='font-bold ml-2'>Total Price: {item.price}</span></div>
                        {
                            a.map( (item,id) => <BillItem key={id} item={item} thename={texts.itemname[lang]} price={texts.price[lang]} amount={texts.amount[lang]} />)
                        }
                    </div>}
                    )
                    :<p>{texts.wait[lang]}</p>
                }
            </div>
        </div>
        :<div className='w-full h-svh flex justify-center items-center'>
            <h3>{texts.wait[lang]}</h3>
        </div>
        }   
    </section>
)
}