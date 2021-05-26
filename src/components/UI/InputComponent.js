import React from 'react'

const InputComponent = (props) => {
    return(
        <input type={props.type ? props.type : "text"} value={props.value ? props.value : ''} className={props.styleClass} onChange={props.onChangeHandler} />
    )
}

export default InputComponent;