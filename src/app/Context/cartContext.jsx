
import { createContext , useContext , useState } from "react";

const CartContext = createContext([]);

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item)=>{
        setCartItems((prev)=>[...prev, item]);
    }

    const removeItem = (item)=>{
        setCartItems((prev)=> prev.filter((prevItem)=> prevItem.name != item.name));
    }

    const clearCart= () => {
        setCartItems([]);
    }

    const plusAmount = (item)=>{
        setCartItems((prev)=>prev.map(ctm => ctm.name == item.name? {name: ctm.name,price: ctm.price, amount: ctm.amount+= 1}:ctm))
    };

    const minusAmount = (item)=>{
        setCartItems((prev)=>prev.map(ctm => ctm.name == item.name? {name: ctm.name,price: ctm.price, amount: ctm.amount-= 1}:ctm));
    }

    return (
        <CartContext.Provider
            value={{cartItems, addItem, removeItem, clearCart, plusAmount, minusAmount}}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = ()=> useContext(CartContext);

export default CartContext;


