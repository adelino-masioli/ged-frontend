import './Breadcrumb.css'
import React from 'react'

export default props =>
    <ol className='breadcrumb'>
        {props.children}
    </ol>
