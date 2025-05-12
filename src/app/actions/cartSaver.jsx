'use server'

import { writeFile } from 'fs/promises';
import carts from '../../../data.json';

export async function SaveCart(req){
   
    let newCartID = makeid(8);
    let isOld = carts.carts.find(item => item.id == newCartID);

    while(isOld){
        newCartID = makeid(8);
        isOld = carts.carts.find(item => item.id == newCartID);
    }

    const newCart ={
        id: newCartID,
        items: req
    }
    const cartFromFile = carts;
    cartFromFile.carts.push(newCart);

    await writeFile('./data.json',JSON.stringify(cartFromFile),'utf-8',function(err){
        if(err){throw err}
        return true;
    });
    
    return{state: 'success',id: newCartID}
    
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
