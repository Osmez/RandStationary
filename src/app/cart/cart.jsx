'use client'
import { useCart } from '../Context/cart';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";

import CartItem from '@/app/Cart/CartItem';
import texts from '@/app/texts.json'
import { useState } from 'react';

const box={
    borderRadius: "10px",
}

export default function Cart({lang, change, isVis}){

    const { cartItems, clearCart , addToCart} = useCart();
    
    const [message, setMessage] = useState(null);
    
    const hasContent = cartItems.length > 0;

    

    return(
        <>
        <h2>Cart</h2>
        </>
        
    )

    
}

