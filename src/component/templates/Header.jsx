import './Header.css';
import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../redux/actionCreators'

import Logo from './Logo'
import Nav from './Nav'
import Sidebar from './Sidebar'

const Header = props => {
    return (
        <header className="main-header">
            <Logo />
            <Nav />
            <Sidebar />
        </header>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = state => {
    return {
        signin: (email, passowrd) => ActionCreators.signinRequest(email, passowrd)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)