'use server'
import { cookies } from "next/headers";
import {SignupFormSchema} from '@/app/lib/definitions';

export async function authenticate(state, formData ) {

  try {
   
    const respo = await fetch('http://randauth.rf.gd/',{method:"GET"});

    return  respo.text();
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }  
  }
}