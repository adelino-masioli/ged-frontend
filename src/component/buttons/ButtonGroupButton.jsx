import React from 'react'

export default props =>
    <button onClick={props.click}  className={`btn ${props.btnclass}`}>
        {props.icon &&
            <i className={props.icon}></i>  
        } {props.label}
    </button>