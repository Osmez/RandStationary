'use server'

import { cookies } from "next/headers";


export async function buyment(Data){
    
    let byments = '[';
    let totalCost = 0;
    Data.forEach(element => {
        byments = byments + '{"name":"'+element.name+'","price":"'+ element.price +'","amount":"'+ element.amount+'"},';
    });
    byments += '{"name":"null","price":"0","amount":"0"}]';
    Data.forEach(element => {
        totalCost += (element.price * element.amount)
    });

    const hdrs = new Headers();
    hdrs.append('Content-Type' ,  'application/json');
    hdrs.append('Accept' ,  'application/json');

    const id = cookies().get('id').value;
    const inid = parseInt(id);
    
    const bodyObject = {content: byments  , price: totalCost, id: inid}
    const budy = JSON.stringify(bodyObject);
    
    try{
        const res = await fetch('http://osmezbase.infy.uk/public/api/buyments',
        {method: "POST" ,headers: hdrs,body: budy})
        const jres = await res.json();
        return jres;
        
    }
    catch(e){
        return e.message;
    }
}

export async function getBuyment(mail){

    try{
        let buys = '';
        const hdrs = new Headers();
        hdrs.append('Content-Type' ,  'application/json');
        hdrs.append('Accept' ,  'application/json');
        const res = await fetch('http://osmezbase.infy.uk/public/api/dashboard/',
        {method: "POST" ,headers: hdrs,body:JSON.stringify({email: mail})})
        .then(res => res.json())
        return res.then((res) => res)
    }
    catch(e){
        throw e.message;
    }
}