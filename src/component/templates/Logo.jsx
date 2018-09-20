import './Logo.css';
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside>
         <Link to="/" className="logo">
            <span className="logo-mini"><strong>GED</strong></span>
            <span className="logo-lg"><strong>Admin</strong>GED</span>
        </Link>
    </aside>
