import { useCart } from "../Context/cartContext";

export default function AddOrPlus({ texts, it, lang }){

  const { cartItems, addItem, removeItem, plusAmount, minusAmount} = useCart();
  const AddToCart = ()=>{
    let billItem = {name: it.name, price: it.price, amount: 1}
    addItem(billItem);
  }

  const RemoveFromCart = ()=>{
    removeItem(it);
  }

  const PlusTheAmount = ()=>{
    plusAmount(it);
  }

  const MinusTheAmount = ()=>{
    minusAmount(it);
  }

  const addOrPlus = cartItems.find(cm => cm.name == it.name && cm.amount > 0 ) ;
  let amnt        = cartItems.find(cm => cm.name == it.name? cm.amount:'');
   
  return(
    <>
    {addOrPlus? <div className='w-full min-h-[25px] text-center'>
        <button className='inline float-start' onClick={PlusTheAmount}>+</button>
        <h2 className='inline-block w-1/2 text-center m-auto'>{amnt.amount}</h2>
        <button className='inline float-end' onClick={MinusTheAmount}>-</button>
        <button className={`inline w-full text-sm py-2 bg-red-700`} onClick={RemoveFromCart}>{texts.removeFromCart[lang]}</button>
      </div>
      :<button className={`p-2 bg-green-800 text-white darl:text-stone-800`} onClick={AddToCart}>
        {texts.addToCart[lang]}
      </button>
    }
    </>
  )
}