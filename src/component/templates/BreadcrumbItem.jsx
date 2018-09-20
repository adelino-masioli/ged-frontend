import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
  <li className={props.active}>
    { props.active === 'active' ?
      props.label
    :
      <Link to={props.path}>
        <i className={props.icon}></i> {props.label}
      </Link>
    }
  </li>
