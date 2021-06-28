import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const catReduer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        
        const existingItemIndex = state.items.findIndex((item) => {
            console.log(item.id);
            console.log(action.items.id);
            return item.id === action.items.id
        })
        let updatedTotalAmount,existingItem,Items;
        let updatedItem;
        console.log(existingItemIndex)
        // console.log(action.items)
        if(existingItemIndex >= 0){
            
            Items = [...state.items]
            existingItem = Items[existingItemIndex]
            updatedTotalAmount = state.totalAmount + existingItem.price;
            existingItem.totalAmount = existingItem.totalAmount + 1;
            Items[existingItemIndex] = existingItem
            updatedItem = Items
            console.log("if");
        }
        else{
            console.log("else");
            updatedItem = state.items.concat(action.items);
            updatedTotalAmount = state.totalAmount + action.items.totalAmount * action.items.price;
        }      
        // const updatedTotalAmount = state.totalAmount;
        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        const existingItem = state.items.findIndex((item) => {
            return item.id === action.id
        })
        
        let items,updatedItem,updatedTotal
        updatedItem = [...state.items]
        let updatedItemTotal = updatedItem[existingItem].totalAmount;
        
        if(+updatedItemTotal > 0){
            items = updatedItem[existingItem]
            items.totalAmount = updatedItemTotal - 1
            if(items.totalAmount === 0){
                // console.log('elseeee');
                updatedItem.splice(existingItem,1);
                // console.log(updatedItem);
                updatedTotal = state.totalAmount - items.price
            }else{
            updatedItem[existingItem] = items;
            updatedTotal = state.totalAmount - items.price
            }
        }
        if(+updatedTotal > 0){
            return {
                items: updatedItem,
                totalAmount: updatedTotal
            }
        }
        else{
            return defaultCartState;
        }
           
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const[cartState,dispacthCart] = useReducer(catReduer, defaultCartState)

    const addToCart = (items) =>{
        dispacthCart({type:'ADD_ITEM',items:items})
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