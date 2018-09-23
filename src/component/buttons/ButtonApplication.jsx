import './ButtonApplication.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to="#" className={`btn btn-app ${props.bgcolor}`}>
        <i className={props.icon}></i> {props.label}
    </Link>