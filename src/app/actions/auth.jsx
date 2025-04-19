'use server'

import {SignupFormSchema} from '@/app/lib/definitions';
import { cookies } from 'next/headers';

export async function authenticate(state, formData ) {

  try {
    const uname = formData.get('email');
    const upassword = formData.get('password');
/*
    const validate = SignupFormSchema.safeParse({
      name: 'osama',
      email: uname,
      password: upassword,
    })

    if(!validate.success){
      //console.log(validate.error.flatten().fieldErrors.)
      return validate.error.flatten().fieldErrors.email + '' + validate.error.flatten().fieldErrors.password
      
    }
*/
  
    const hdrs = new Headers();
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');
    const body={email: uname, password: upassword}
    
    const res = await fetch('http://osmezbase.infy.uk/public/api/login',{
      method:"POST",
      headers: hdrs,
      body:JSON.stringify(body)
    });

    const jres = await res.json();
    
        cookies().set('mainjob',jres.id,{
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 , // One day
          path: '/',
        });
        cookies().set('playAudio',jres.verify,{
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 , // One day
          path: '/',
        });
    return jres;
    
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {message:'invalid'}
        default:
          return {message:error.message};
      }
    }  
  }
}

export async function SendVerify(){
  const id = parseInt(cookies().get(id).value);

  const hdrs = new Headers();
  hdrs.append('Content-Type' ,  'application/json');
  hdrs.append('Accept' ,  'application/json');
   
  const res = await fetch('http://osmezbase.infy.uk/public/api/verify',
                      {method:'post',
                      headers:hdrs,
                      body:{id:id}
                    })
  const resj = await res.json();

  return resj;
}

export async function SendCode(state, formData){
  const id = parseInt(cookies().get('id').value);
  const vcode = formData.get('code');

  const hdrs = new Headers();
  hdrs.append('Content-Type' ,  'application/json');
  hdrs.append('Accept' ,  'application/json');
  try{
    const res = await fetch('http://osmezbase.infy.uk/public/api/verify',
      {method:'post',
      headers:hdrs,
      body:{id:id, code: vcode}
      })
    const resj = await res.json();
 
    return resj;

  }catch(e){
    return {message: 'error'}
  }
 
}



export async function testAuth(state, formData ) {

  try {
    const uname = formData.get('email');
    const upassword = formData.get('password');
/*
    const validate = SignupFormSchema.safeParse({
      name: 'osama',
      email: uname,
      password: upassword,
    })

    if(!validate.success){
      //console.log(validate.error.flatten().fieldErrors.)
      return validate.error.flatten().fieldErrors.email + '' + validate.error.flatten().fieldErrors.password
      
    }
*/
  
    const hdrs = new Headers();
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');
    const body={email: uname, password: upassword}
    
    const res = await fetch('http://osmezbase.infy.uk/public/api/login',{
      method:"POST",
      headers: hdrs,
      body:JSON.stringify(body)
    });

    const jres = await res.text();
       
    return jres;
    
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {message:'invalid'}
        default:
          return {message:error.message};
      }
    }  
  }
}
