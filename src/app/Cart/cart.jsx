'use client'
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { buyment } from '@/app/actions/buyment';
import {  useState } from 'react';
import { useCart } from '../Context/cartContext';
import CartItem from '@/app/Cart/CartItem';
import texts from '@/app/texts.json';

const box={
    borderRadius: "10px",
}

export default function Cart({lang, change, isVis}){
    
    const { cartItems , clearCart } = useCart();
    const [ message, setMessage] = useState(null);
    
    const hasContent = cartItems.length > 0;

    const ClearBuyments = () => { clearCart(); };

    const submitBuys = async () =>{
        
        if(message == 'wait'){return;}
        setMessage('wait');
        const res = await buyment(cartItems);
        if(res.message){
            if(res.message  == 'success'){
                ClearBuyments();
            }
            setMessage(res.message);
            setTimeout(()=>{setMessage(null)},5000);
            
        }
        
    }

    return(
        <>
        <AnimatePresence initial={false}>
                {isVis == 'cart' ? (
                    <motion.div
                        className={`fixed py-4 px-2 ${lang == "en"? 'top-[80px] right-[50px]':'top-[80px] left-[50px]'} z-50 w-[280px] min-h-16 max-h-[300px] overflow-y-auto h-fit bg-white border-2 border-stone-500 dark:bg-stone-700`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    >
                       
                    {
                        hasContent? 
                            cartItems.map((tm,id) => <CartItem key={id} name={tm.name} amount={tm.amount} total={texts.totalprice[lang]} lang={lang} price={tm.price*tm.amount} />)
                            :texts.noitems[lang]
                            }
                    {
                        hasContent && message != 'wait' ? 
                        <div>
                            <button className=' p-2 border-2 border-stone-300 rounded-lg dark:bg-slate-500' onClick={()=>{submitBuys()}}>{texts.purchase[lang]}</button>
                            <button className=' p-2 border-2 border-stone-300 rounded-lg dark:bg-slate-500' onClick={()=>{clearCart()}}>{texts.clear[lang]}</button>
                        </div>
                        :''
                    }
                    {message? <div className={`${message == "success"? 'bg-red-500':'bg-red-500'} p-2 text-center mt-2 rounded-md`}>{texts[message][lang]}</div>:''}
                   
                    </motion.div>
                ) : null}
            </AnimatePresence>
        <motion.button 
            className={`w-[50px] h-[50px] rounded-md relative text-center mx-2 border-2 border-stone-500 ${cartItems.length > 0 ? 'bg-red-400':''}`} 
            style={{lineHeight:"50px"}}
            onClick={() => {isVis == 'cart'? change(null):change('cart')}}>
                {cartItems.length}
        </motion.button>
        </>
        
    )

    
}

/*
isVis == 'cart'? change(null):change('cart')}*/