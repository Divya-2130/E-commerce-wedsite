import { createContext} from "react";
import React,{useState} from "react";
import all_product from '../Components/Assets/all_product'
import CartItems from "../Components/CartItems/CartItems";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}; // create the empty object
    for (let index =0; index < all_product.length+1; index++) {
        cart[index] =0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems,setcartItems] = useState(getDefaultCart())
    //add to cart function
    const addToCart = (itemId) => {
        setcartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);  
    }
    const removeFromCart = (itemId) => {
        setcartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product) =>product.id ===Number(item))
                totalAmount +=itemInfo.new_price *cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems =() => {
        let totalItem =0;
        for(const item in cartItems) 
        {
            if(cartItems[item]>0) 
            {
                totalItem+=cartItems[item];
            }    
        }  
        return totalItem;  
    }
    const contextValue = {getTotalCartAmount ,getTotalCartItems ,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;