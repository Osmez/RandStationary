'use server'
import { cookies } from 'next/headers'

export async function getUserData(){
    
    try{
        const hdrs = new Headers();
        hdrs.append('Content-Type' ,  'application/json');
        hdrs.append('Accept' ,  'application/json');
      
      
        const idc = cookies().get('mainjob')?.value;
        console.log(idc);
        const urlf = 'http://osmezbase.infy.uk/public/api/dashboard/'+ idc;
        const data = await fetch(urlf, {headers:hdrs,method:"get"}) 
        const jdata = await data.json();
        
        return jdata;

    }catch(e){
        return 'error';
    }
}