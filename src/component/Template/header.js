import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ActionCreators from './../../redux/actionCreators'
import logo from './../../logo.svg'


const Header = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>

            <p>
                <Link to='/home'>Home</Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Login</Link>
            </p>
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