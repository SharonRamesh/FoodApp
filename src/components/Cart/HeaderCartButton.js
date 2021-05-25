import React, { useContext, useEffect, useState } from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "./CartIcon";
import CartContext from '../../Store/cart-context'

const HeaderCart = (props) =>{

 const contxt = useContext(CartContext);

 const cartItems = contxt.items.length;

 const upadteCartStatus = () =>{
    props.showCart();
 }

 return (
    
     <button className={classes.button} onClick={upadteCartStatus}>
         <span className={classes.icon}><CartIcon /></span>
         <span>Your Cart</span>
         <span className={classes.badge}>{cartItems}</span>
     </button>
 )
}

export default HeaderCart;