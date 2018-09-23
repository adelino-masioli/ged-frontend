import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={props.link} className={`btn ${props.btnclass}`}>
        {props.icon &&
            <i className={props.icon}></i>  
        } {props.label}
    </Link>