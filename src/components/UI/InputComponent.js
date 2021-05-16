import React from 'react'

const InputComponent = (props) => {
    return(
        <input type={props.type ? props.type : "text"} className={props.styleClass} onChange={props.onChangeHandler} />
    )
}

export default InputComponent;