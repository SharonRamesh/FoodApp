import React,{ useContext} from "react"
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from '../../Store/cart-context'

const Cart = (props) => {

    const cartctx = useContext(CartContext);
    console.log(cartctx.items);
    const cartItems = cartctx.items.map((item) => {
        return <li>
            <h4>Name: {item.name}</h4>
            <p>Item Amount: {item.totalAmount}<span className={Classes.price}>Item Price: ${item.price}</span></p>
        </li>
    })
    
return(
    
    <Modal hideCart={props.hideCart}>
        {cartctx.items.length ? <React.Fragment>
        <ul className={Classes.ulStyle}>{cartItems}</ul>
        <p className={Classes.total}>Total Amount: ${cartctx.totalAmount ? cartctx.totalAmount : 0}</p></React.Fragment>
        : <p className={Classes.emptyCart}><i>You Cart is Empty!!</i></p>}
        </Modal>
)
}

export default Cart;