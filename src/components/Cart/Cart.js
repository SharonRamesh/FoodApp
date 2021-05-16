import React,{useState, useContext, useEffect} from "react"
import Classes from "./Cart.module.css";
import Card from '../UI/Card'
import Modal from "../UI/Modal";
import CartContext from '../../Store/cart-context'

const Cart = () => {

    const cartctx = useContext(CartContext);

    const [cartitems,updateItems] = useState(cartctx.cart);

    useEffect(()=> {
        updateItems(cartctx.cart);
    },[(cartctx.cart)]);
    
return(
    
    <Modal>
        <p>{cartitems ? cartitems : ''}</p>
        </Modal>
)
}

export default Cart;