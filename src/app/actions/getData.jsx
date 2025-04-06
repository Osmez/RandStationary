'use server'
import { cookies } from 'next/headers'

export async function getUserData(){
    
    try{
        const hdrs = new Headers();
        hdrs.append('Content-Type' ,  'application/json');
        hdrs.append('Accept' ,  'application/json');
      
      
        const idc = cookies().get('id')?.value;
        console.log(idc);
        const urlf = 'http://127.0.0.1:8000/api/dashboard/'+ idc;
        const data = await fetch(urlf, {headers:hdrs,method:"get"}) 
        const jdata = await data.json();
        
        return jdata;

    }catch(e){
        return 'error';
    }
}