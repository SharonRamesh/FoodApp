import React, { useContext, useEffect, useState } from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "./CartIcon";
import CartContext from '../../Store/cart-context'

const HeaderCart = () =>{

 const [cartItems,updateItems] = useState(0);
 const contxt = useContext(CartContext);
//  updateItems(contxt.cart.length);

console.log(contxt.cart);
 return (
    
     <button className={classes.button}>
         <span className={classes.icon}><CartIcon /></span>
         <span>Your Cart</span>
         <span className={classes.badge}>{contxt.items.length}</span>
     </button>
 )
}

export default HeaderCart;