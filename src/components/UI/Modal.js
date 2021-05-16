import React,{useState} from "react"
import Classes from "./Modal.module.css";
import Card from '../UI/Card'


const Modal = (props) => {

    const[modalClasses,updateModalStatus] = useState(Classes.modal+" "+Classes.show);

    const clearModal = () => {
        updateModalStatus(Classes.modal+" "+Classes.hide);
    }

return(
    
    <div id="myModal" className={modalClasses}>
        <Card classToUse='whiteCard'>
        <div className={Classes['modal-conten']}>
        <span className={Classes.close} onClick={clearModal}>&times;</span>
        {props.children}
        <button type="button" onClick={clearModal}>Close</button>
        <button type="button">Order</button>
        </div>
        </Card>
    </div> 
)
}

export default Modal;