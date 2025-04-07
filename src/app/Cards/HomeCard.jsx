"use client"
import { useCart } from '../Context/cartContext';
import texts from '@/app/texts.json';
import Image from 'next/image';



export default function HomeCard({item, lng, view, font, arfont}){

  const {addToCart, cartItems , PlusAmount , MinusAmount , removeFromCart} = useCart();
   const handleAddCartItem = ()=>{
      let billItem = {name: item.name, price: item.price, amount: 1}
      addToCart(billItem)
   }

   const fnt = lng == "en"? font : arfont;

   const plusItem = ()=>{
      PlusAmount(item);
   }

   const MinusItem = ()=>{
    MinusAmount(item);
   }

   const remove = () => {
    removeFromCart(item);
   }

  const addOrPlus = cartItems.find(cm => cm.name == item.name && cm.amount > 0 ) ;
  const amnt =  cartItems.find(cm => cm.name == item.name? cm.amount:0 ) ;
  
  return  (
  <div className='w-[150px] m-2 min-h-[200px] p-2 bg-stone-200 dark:bg-stone-900 rounded-lg flex flex-col border-2 border-stone-600 transition-all hover:scale-125'>
    <button onClick={()=>{view(item);}}><Image src={'/enlarge.png'} className='w-8 h-8 mb-2' width={50} height={50} alt='enlarge icon' /></button>
    <div className='w-full  h-32 bg-stone-200 dark:bg-stone-900 rouded-lg text-center'>
      <Image src={`${item.img}`} className='w-auto h-full m-auto' width={100} height={100} alt="item review" />
    </div>
    <p className={`my-2 text-center ${fnt}`}> <span>{item.name}</span></p>
    <p className={`my-2 text-center ${fnt}`}>{texts.price[lng]} <span> {item.price}</span></p>
    {item.color? <div className={'my-2 text-center rounded-md w-full min-h-8'} style={{backgroundColor:item.color}}></div>:''} 
    {addOrPlus? <div className='w-full min-h-[25px] text-center'>
      <button className='inline float-start' onClick={plusItem}>+</button>
      <h2 className='inline-block w-1/2 text-center m-auto'>{amnt.amount}</h2>
      <button className='inline float-end' onClick={MinusItem}>-</button>
      <button className={`inline w-full text-sm py-2 bg-red-700 ${fnt}`} onClick={remove}>{texts.removeFromCart[lng]}</button>
      </div>
    :<button className={`p-2 bg-green-800 text-white darl:text-stone-800 ${fnt}`} onClick={handleAddCartItem}>{texts.addToCart[lng]}</button>}
    
  </div>)
}

/*
 const addOrPlus = cartItems.find(ctm => ctm.name == item.name && ctm.amount > 0)? true:false;
bg #2e3745
*/