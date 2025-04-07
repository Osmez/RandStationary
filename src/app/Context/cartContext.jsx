
import { createContext, useContext, useState } from "react";


const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems ] = useState([]);
  
  const addToCart = (item) => {
     
  setCartItems((prevItems) => [...prevItems, item]);
   
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemId.name));
   
  };

  const PlusAmount = (item)=>{
    
    const f = cartItems.map(ctm => ctm.name == item.name? {name: ctm.name,price: ctm.price, amount: ctm.amount+= 1}:ctm);
    setCartItems(f);
    
  }

  const MinusAmount = (item)=>{
    const f = cartItems.map(ctm => ctm.name == item.name && ctm.amount > 1? {name: ctm.name ,price: ctm.price ,amount: ctm.amount -= 1}: ctm);
    setCartItems(f);
   
  }

  const clearCart = () => {
    setCartItems([]);
   
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart , PlusAmount , MinusAmount}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;