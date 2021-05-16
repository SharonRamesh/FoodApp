import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addToCart = (item) =>{
        console.log(item);
    }

    const removeFromCart = (id) =>{
        console.log(id);
    }
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;