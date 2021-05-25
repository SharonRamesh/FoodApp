import React,{useState} from "react"
import Classes from "./Modal.module.css";
import Card from '../UI/Card'


const Modal = (props) => {

    const modalClasses = Classes.modal+" "+Classes.show;

    const clearModal = () => {
        props.hideCart();
    }

return(
    
    <div id="myModal" className={modalClasses}>
        <Card classToUse='whiteCard'>
        <div className={Classes['modal-content']}>
        <span className={Classes.close} onClick={clearModal}>&times;</span>
        {props.children}
        <div className={Classes.button}>
            <button type="button" className={Classes.closebtn} onClick={clearModal}>Close</button>
            <button type="button">Order</button>
        </div>
        </div>
        </Card>
    </div> 
)
}

export default Modal;