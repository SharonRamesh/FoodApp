import React,{ useContext, useEffect} from "react"
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from '../../Store/cart-context'
import remove from "../../Assets/remove.png";
import add from "../../Assets/add.ico";
import Input from "../UI/InputComponent";
import CartIcon from "./CartIcon";

const Cart = (props) => {

    const cartctx = useContext(CartContext);

    const removeCartItem = (id) => {
        cartctx.removeItem(id);
    }

    const addCartItem = (items) => {
        console.log(items);
        cartctx.addItem(items)
    }

    console.log(cartctx.items);
    const cartItems = cartctx.items.length && cartctx.items.map((item,key) => {
        return <li key={key}>
            <h4>Name: {item.name}</h4>
            <p className={Classes.right}>Item Price: ${item.price}
            <span className={Classes.right10}><span>
                    <img src={add} className={Classes.remove} onClick={addCartItem.bind(null,{'id' : item.id,'totalAmount' : item.totalAmount+1}) }/>
                </span>
                <Input value={item.totalAmount} styleClass={Classes.inputClass} disabled='disabled' />
                <span>
                    <img src={remove} className={Classes.remove} onClick={removeCartItem.bind(null,item.id) }/>
                </span>
            </span>
            </p>
           
        </li>
    })
    
return(
    
    <Modal hideCart={props.hideCart}>
        {cartctx.items.length ? <React.Fragment>
        <ul className={Classes.ulStyle}>{cartItems}</ul>
        <p className={Classes.total}>Amount to pay<br/> ${cartctx.totalAmount ? cartctx.totalAmount.toFixed(2) : 0}</p></React.Fragment>
        : <p className={Classes.emptyCart}><i>Your<br/> <CartIcon className={Classes.icon}/><br/> is Empty!!</i></p>}
        </Modal>
)
}

export default Cart;