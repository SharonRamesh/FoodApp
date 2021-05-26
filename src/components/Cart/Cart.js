import React,{ useContext} from "react"
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from '../../Store/cart-context'
import remove from "../../Assets/remove.png";

const Cart = (props) => {

    const cartctx = useContext(CartContext);

    const removeCartItem = (id) => {
        cartctx.removeItem(id);
    }

    console.log(cartctx.items);
    const cartItems = cartctx.items.length && cartctx.items.map((item) => {
        return <li>
            <h4>Name: {item.name}<span className={Classes.price}>Item Price: ${item.price}</span></h4>
            <p>Item Amount: {item.totalAmount}<span className={Classes.price}><img src={remove} className={Classes.remove} onClick={removeCartItem.bind(null,item.id) }/></span></p>
        </li>
    })
    
return(
    
    <Modal hideCart={props.hideCart}>
        {cartctx.items.length ? <React.Fragment>
        <ul className={Classes.ulStyle}>{cartItems}</ul>
        <p className={Classes.total}>Amount to pay<br/> ${cartctx.totalAmount ? cartctx.totalAmount.toFixed(2) : 0}</p></React.Fragment>
        : <p className={Classes.emptyCart}><i>You Cart is Empty!!</i></p>}
        </Modal>
)
}

export default Cart;