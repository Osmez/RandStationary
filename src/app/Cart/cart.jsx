'use client'
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import CartItem from '@/app/Cart/CartItem';
import texts from '@/app/texts.json'
import { useCart } from '../Context/cartContext';
import { RandButton } from '@/app/ui/randbutton';
import { SaveCart } from '@/app/actions/cartSaver';
import { useEffect, useState } from 'react';
import { NotificationMessage } from '@/app/ui/Notifications'

const box={
    borderRadius: "10px",
}

export default function Cart({lang, change, isVis}){
    
    const { cartItems , clearCart, addItem } = useCart();

    const [saved, setSaved] = useState(null);

    const handleClick = async() => {
       
        const res = await SaveCart(cartItems);
        if(res){
            if(res.state == 'success'){
                clearCart();
                setSaved(res);
            }
        }
    }

    const done = ()=>{
        setSaved(null);
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
                        {cartItems.length == 0 ? <div className='p-2 bg-stone-200 dark:bg-stone-800 rounded-md' dir={texts.dir[lang]}>{texts.noitems[lang]}</div>
                        :<> 
                            {cartItems.map((it,id) => <CartItem key={id} name={it.name} amount={it.amount} price={it.price} dir={texts.dir[lang]} />)}
                            <div className='flex flex-row justify-around'>
                                <RandButton text={texts.clear[lang]} fun={clearCart}/>
                                <RandButton text={'send'} fun={()=>{handleClick()}} />
                            </div>
                        </>}
                        {saved? <>
                            <NotificationMessage state={saved.state} message={texts.purchase[lang]} dire={texts.dir[lang]} />
                            <NotificationMessage state={saved.state} message={texts.billid[lang]+saved.id} dire={texts.dir[lang]} />
                            <RandButton text={texts.done[lang]} fun={done} />
                        </>:''}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        <motion.button 
            className={`w-[50px] h-[50px] text-dark dark:text-whaite rounded-md relative text-center mx-2 border-2 border-stone-500 ${cartItems.length > 0 ? 'bg-red-700 text-white':''}`} 
            style={{lineHeight:"50px"}}
            onClick={() => {isVis == 'cart'? change(null):change('cart')}}>
                {cartItems.length}
        </motion.button>
        </>
        
    )

    
}
