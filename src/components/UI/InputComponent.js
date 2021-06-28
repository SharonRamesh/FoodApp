import React from 'react'

const InputComponent = React.forwardRef((props, ref) => 
    (
        <input type={props.type ? props.type : "text"} 
        className={props.styleClass} 
        onChange={props.onChangeHandler} 
        value={props.value}
        ref={ref}
        readonly={props.readOnly}/>
        
    )
)

export default InputComponent;