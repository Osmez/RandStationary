'use server'
import { cookies } from "next/headers";
import {SignupFormSchema} from '@/app/lib/definitions';

export async function authenticate(state, formData ) {

  try {
    const uname = formData.get('email');
    const upassword = formData.get('password');

    const validate = SignupFormSchema.safeParse({
      name: 'osama',
      email: uname,
      password: upassword,
    })

    if(!validate.success){
      //console.log(validate.error.flatten().fieldErrors.)
      return validate.error.flatten().fieldErrors.email + '' + validate.error.flatten().fieldErrors.password
      
    }
    const hdrs = new Headers();
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');
    const respo = await fetch('',{method:"POST",
    body:JSON.stringify({email: uname, password: upassword,status: 'login'}),
    headers:hdrs});
/*
    if(cookies().get('session').value != null){
      cookies().set('session','loggedin',{
        httpOnly: true,
        secure: 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }
  */
    return  respo.body.email;
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

export async function signup(state, formData){
  try{
    return 'successfull';
  }catch(error){
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