'use client'
import texts from '@/app/texts.json';
import Notification from '../Notification/Notification';
import { LanguageContext } from '../Context/LanguageContext';
import { SendCode } from '@/app/actions/auth.jsx';
import { useFormState, useFormStatus } from 'react-dom';
import { useContext, useEffect } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import {useUsers} from '../Context/usersContext';


export default function Confirm(){

    const [errorMessage, dispatch] = useFormState( SendCode, undefined)

    const lang = useContext(LanguageContext);

    const {theUser} = useUsers();

    const { pending } = useFormStatus()

    const handleClick = (event) => {

        if (pending) {
          event.preventDefault();
        }
    }

    useEffect(
        ()=>{
            if(errorMessage && errorMessage.message == 'success'){
                redirect('/dashboard');
            }
            if(theUser.user && theUser.user.user.verified){
                redirect('/dashboard');
            }
        }
    )

    return  <div className=" w-full inline-block">
                <div className='w-4 h-[175px]'></div>
                <h2 className='font-extrabold text-xl text-center'><span className=' inline-block animate-PressOne'>R</span><span className='inline-block animate-PressTwo'>a</span><span className='inline-block animate-PressThree'>n</span><span className='inline-block animate-PressFour'>d</span>-Stationery</h2>
                
                <form action={dispatch} className="m-auto mt-4 min-h-[250px] w-[280px] border-2 border-black p-4 bg-stone-700">
                
                    <h3 className='text-center font-bold text-xl'>{texts.confrimtext[lang]}</h3>
                    <div className='mt-[20px]'>
                        <label className='block' htmlFor='code' dir={lang == 'en'? 'ltr':'rtl'} >{texts.ccode[lang]}</label>
                        <input className='mt-2 dark:bg-stone-800 w-full h-12 p-2' style={{'lineHeight':'28pt'}} id="code" name="code" type="text"  required/>
                    </div>
                    
                    <div className={lang == "en"? 'text-left w-full':'text-right w-full'}>
                        <button className='mt-4 border-2 p-2 bg-green-800 border-stone-600' aria-disabled={pending} type="submit" onClick={handleClick}>
                        {texts.check[lang]}
                        </button>
                    </div>
                    {errorMessage && errorMessage.message && <Notification message={texts[errorMessage.message][lang]} />}
                </form>
            </div>
}