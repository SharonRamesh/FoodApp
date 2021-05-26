import React,{useContext} from "react"
import Classes from "./Modal.module.css";
import Card from '../UI/Card'
import CartContext from "../../Store/cart-context";


const Modal = (props) => {

    const modalClasses = Classes.modal+" "+Classes.show;

    const ctx = useContext(CartContext);

    const clearModal = () => {
        props.hideCart();
    }

return(
    
    <div id="myModal" className={modalClasses}>
        <Card classToUse='whiteCard'>
            <div><span className={Classes.close} onClick={clearModal}>&times;</span></div>
        <div className={Classes['modal-content']}>
        {props.children}
        <div className={Classes.button}>
            <button type="button" className={Classes.closebtn} onClick={clearModal}>Close</button>
            {ctx.items.length ? <button type="button" className={Classes.orderButton}>Order</button> : ''}
        </div>
        </div>
        </Card>
    </div> 
)
}

export default Modal;