'use client'
import { useEffect } from 'react';
import {useCart} from '../Context/cart';

export default function Cart(){

    useEffect(
        ()=>{localStorage.setItem("cartItems", JSON.stringify(''))},[]
    )

    const { cartItems } = useCart();

    return(
        <div className="w-[50px] h-[50px] rounded-full relative text-center mx-2 border-2 border-stone-300 " style={{lineHeight:"50px"}}>
            {cartItems.length}
            
        </div>
    )
}
