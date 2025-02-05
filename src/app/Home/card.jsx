"use client"
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { useCart } from '../Context/cart';

export default function Card({item}){

  const lang = useContext(LanguageContext);

  const {addToCart} = useCart();
   const handleAddCartItem = ()=>{
      addToCart(item);
   }
  
  return  (
  <div className='w-[150px] m-2 min-h-[200px] p-2 bg-slate-300 flex flex-col transition-all hover:scale-125'>
    <div className='w-full  h-32 bg-slate-400 rouded-lg'></div>
    <p>{item.name}</p>
    <button className='' onClick={handleAddCartItem}>{lang == 'en'? 'Add to Cart':'اضافة للمشتريات'}</button>
  </div>)
}
