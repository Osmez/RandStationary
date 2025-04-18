'use client'

import { authenticate } from '../actions/auth';
import { useFormState, useFormStatus } from 'react-dom';
import { LanguageContext } from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useUsers } from '../Context/usersContext';
import Notification from '@/app/Notification/Notification';
import texts from '@/app/texts.json';
import Link from 'next/link';

export default function Login(){
          
  const lang = useContext(LanguageContext);
  const { addUser } = useUsers();

  const [errorMessage, dispatch] = useFormState( authenticate, undefined);

  const { pending } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  }
    
  useEffect(()=>{
    if(errorMessage){
      if(errorMessage.message == 'success'){
        addUser(errorMessage.user);
        redirect('/dashboard');  
      }
    }}
  )

    return (
      <div className=" w-full inline-block">
        <div className="w-4 h-[175px]"></div>
        <h2 className="font-extrabold text-xl text-center">
          <span className=" inline-block animate-PressOne">R</span>
          <span className="inline-block animate-PressTwo">a</span>
          <span className="inline-block animate-PressThree">n</span>
          <span className="inline-block animate-PressFour">d</span>-Stationery
        </h2>

        <form
          action={dispatch}
          className="m-auto mt-4 min-h-[250px] w-[280px] border-2 border-black p-4 bg-slate-100 dark:bg-stone-700 mb-6"
        >
          <h3 className="text-center font-bold text-xl">{texts.login[lang]}</h3>
          <div className="mt-[20px]">
            <label
              className="block"
              htmlFor="email"
              dir={lang == "en" ? "ltr" : "rtl"}
            >
              {texts.email[lang]}
            </label>
            <input
              className="mt-2 dark:bg-stone-800 w-full h-12 p-2"
              style={{ lineHeight: "28pt" }}
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mt-[20px]">
            <label
              className="block"
              htmlFor="password"
              dir={lang == "en" ? "ltr" : "rtl"}
            >
              {texts.password[lang]}
            </label>
            <input
              className="mt-2 w-full dark:bg-stone-800 h-12 p-2"
              style={{ lineHeight: "28pt" }}
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          {errorMessage && errorMessage.message && (
            <Notification message={errorMessage.message} />
          )}

          <div
            className={lang == "en" ? "text-left w-full" : "text-right w-full"}
          >
            <button
              className="mt-4 border-2 p-2 bg-green-800 border-stone-600 text-stone-200 dark:text-stone-800"
              aria-disabled={pending}
              type="submit"
              onClick={handleClick}
            >
              {texts.login[lang]}
            </button>
          </div>
          <Link
            href={"/login"}
            className="w-full mt-2 block text-sm text-center dark:text-stone-400 hover:text-stone-200"
          >
            {texts.createacc[lang]}
          </Link>
        </form>
       
      </div>
    );
}
