'use client'
import { authenticate } from '../actions/auth';
import { useFormState, useFormStatus } from 'react-dom';
import { LanguageContext } from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';



export default function Signup(){

  const lang = useContext(LanguageContext);

    const [errorMessage, dispatch] = useFormState( authenticate, undefined)

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
      if(errorMessage == "allowed"){
        redirect('/login');
      }
    }
  
    return (
      <section className=' pt-[120px] min-h-screen'>
          
          <form action={dispatch} className="m-auto w-56 border-2 border-black p-4 bg-slate-500">
          <h4>Signup</h4>
              <div className='mt-2'>
                  <label htmlFor='name' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Your Name:':'الاسم:'}</label>
                  <input id="name" name="name" type="text" placeholder="your name" required/>
                  
              </div>
              <div className='mt-4'>
                  <label htmlFor='number' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Phone Number:':'رقم العاتف:'}</label>
                  <input id="number" name="number" type="number" placeholder="mobile phone number" required/>
                  
              </div>
              <div className='mt-4'>
                  <label htmlFor='email' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Your Email:':'الايميل:'}</label>
                  <input id="email" name="email" type="email" placeholder="your email" required/>
                  
              </div>
              <div className='mt-4'>
                    <label htmlFor='password' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Your password:':'كلمة السر:'}</label>
                    <input id="password" name="password" type="password"  required />
                    
              </div>
              <div className='mt-4'>
                    <label htmlFor='conpassword' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'confirm password:':'تاكيد كلمة السر:'}</label>
                    <input id="conpassword" name="conpassword" type="password"  required />
                    
              </div>
            
              {errorMessage && <p>{errorMessage}</p>}
              
              <button className='mt-4' aria-disabled={pending} type="submit" onClick={handleClick}>
                {lang == 'en'? 'Signup':'انشاء حساب'}
              </button>
          </form>
      </section>
    )
}