import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const catReduer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        console.log(state.items)
        console.log(action.items)
        const updatedItem = state.items.concat(action.items);
        const updatedTotalAmount = state.totalAmount + action.items.totalAmount * action.items.price;
        // const updatedTotalAmount = state.totalAmount;
        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){

    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const[cartState,dispacthCart] = useReducer(catReduer, defaultCartState)

    const addToCart = (item) =>{
        console.log(item)
        dispacthCart({type:'ADD_ITEM',items:item})
    }

    const removeFromCart = (id) =>{
        dispacthCart({type:'REMOVE_ITEM',id:id})
    }
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;