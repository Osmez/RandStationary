'use client'
import { authenticate } from '../actions/auth';
import { useFormState, useFormStatus } from 'react-dom';
import { LanguageContext } from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';
import {useUsers} from '../Context/usersContext';

export default function Login(){

    const {addTheUser} = useUsers();
          
    const lang = useContext(LanguageContext);

    const [errorMessage, dispatch] = useFormState( authenticate, undefined)

    const { pending } = useFormStatus()

    const handleClick = (event) => {

      if (pending) {
        event.preventDefault();
      }
    }
    useEffect(()=>{
      console.log(errorMessage);
      if(errorMessage == 'allowed'){
        updateUser();
      }
    })
    const updateUser = ()=>{
        addTheUser({nm:'sdsd'});
        redirect('/dashboard')
    }

    return (
        <div className=" w-full mt-44 inline-block">
          <h2 className='font-extrabold text-xl'><span className=' inline-block animate-PressOne'>R</span><span className='inline-block animate-PressTwo'>a</span><span className='inline-block animate-PressThree'>n</span><span className='inline-block animate-PressFour'>d</span>-Stationery</h2>
          <h3>Login</h3>
          
            <form action={dispatch} className="m-auto w-56 border-2 border-black p-4">
            <div>
                <label htmlFor='email' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Your Email:':'الايميل:'}</label>
                <input id="email" name="email" type="email" placeholder="your email" required/>
                
            </div>
           <div>
                <label htmlFor='password' dir={lang == 'en'? 'ltr':'rtl'} >{lang == 'en'? 'Your password:':'كلمة السر:'}</label>
                <input id="password" name="password" type="password"  required />
                
           </div>
           
            {errorMessage && <p>{errorMessage}</p>}
            
            <button aria-disabled={pending} type="submit" onClick={handleClick}>
              {lang == 'en'? 'Log in':'تسجيل الدخول'}
            </button>
        </form>
        </div>
        
    )
}
