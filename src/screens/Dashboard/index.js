import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Dashboard = props => {

    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h1>Admin {props.auth.user.role}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Dashboard)
