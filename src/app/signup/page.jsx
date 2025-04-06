'use client'
import { signup } from '../actions/signuo';
import { useFormState, useFormStatus } from 'react-dom';
import { LanguageContext } from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';
import Notification from '@/app/Notification/Notification';
import  texts  from '@/app/texts.json';
import Link from 'next/link';

export default function Signup(){

  const lang = useContext(LanguageContext);

    const [errorMessage, dispatch] = useFormState( signup, undefined)

    const { pending } = useFormStatus()

    const handleClick = (event) => {

      if (pending) {
        event.preventDefault();
      }
    }

    useEffect(()=>{
      hasSignd();
    },[]);

    const hasSignd = ()=>{
      if(errorMessage == "success"){
        redirect('/login');
      }
    }
  
    return (
      <section className=' pt-[120px] min-h-screen'>
          
          <form action={dispatch} className="m-auto w-[280px] border-2 border-black p-4 bg-stone-700">
          <h3 className='text-center font-bold text-xl'>{texts.createacc[lang]}</h3>
              <div className='mt-2'>
                  <label className='w-full block' htmlFor='name' dir={lang == 'en'? 'ltr':'rtl'} >{texts.name[lang]}</label>
                  <input className='dark:bg-stone-800 p-2 h-12 w-full' id="name" name="name" type="text" dir={lang == "en"? 'ltr':'rtl'} required/>
                  {errorMessage && errorMessage.type == 'nml' && <Notification message={texts[errorMessage.type][lang]} />}
              </div>
              <div className='mt-4'>
                  <label  className='w-full block' htmlFor='phone' dir={lang == 'en'? 'ltr':'rtl'}>{texts.phone[lang]}</label>
                  <input className='dark:bg-stone-800 p-2 h-12 w-full' id="phone" name="phone" type="number" required/>
                  {errorMessage && errorMessage.type == 'ph' && <Notification message={texts[errorMessage.er][lang]} />}
              </div>
              <div className='mt-4'>
                  <label  className='w-full block' htmlFor='email' dir={lang == 'en'? 'ltr':'rtl'}>{texts.email[lang]}</label>
                  <input className='dark:bg-stone-800 p-2 h-12 w-full' id="email" name="email" type="email"  required/>
                  
              </div>
              <div className='mt-4'>
                    <label  className='w-full block' htmlFor='password' dir={lang == 'en'? 'ltr':'rtl'}>{texts.password[lang]}</label>
                    <input  className='dark:bg-stone-800 p-2 h-12 w-full' id="password" name="password" type="password"  required />
                    
              </div>
              <div className='mt-4'>
                    <label  className='w-full block' htmlFor='conpassword' dir={lang == 'en'? 'ltr':'rtl'}>{texts.confirmp[lang]}</label>
                    <input className='dark:bg-stone-800 p-2 h-12 w-full' id="conpassword" name="conpassword" type="password"  required />
                    {errorMessage && errorMessage.type == "cpass" && <Notification message={texts[errorMessage.type][lang]} />}

              </div>
            
              {errorMessage && errorMessage.message && <Notification message={texts[errorMessage.message][lang]} />}
              <div className={'w-full'+ lang == "en"? 'text-left':'text-right'}>
              <button className='mt-4 border-2 p-2 bg-green-800 border-stone-600' aria-disabled={pending} type="submit" onClick={handleClick}>
                {texts.signup[lang]}
              </button>
              </div>
              <Link href={'/login'} className='w-full mt-2 block text-sm text-center dark:text-stone-400 hover:text-stone-200'>{texts.haveacc[lang]}</Link>
          </form>
      </section>
    )
}