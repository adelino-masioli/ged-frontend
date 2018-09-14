import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = props => <h1>Home Admin</h1>
const Users = props => <h1>Users Admin</h1>

const Admin = props => {

    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }else {
        if (JSON.parse(props.auth.user).role !== 'admin') {
            return <Redirect to='/dashboard' />
        }
    }

    return (
        <div>
            <h1>Admin {props.auth.user.role}</h1>
            <p>
                <Link to='/admin'>Home Admin</Link>
                <Link to='/admin/users'>Users Admin</Link>
            </p>
            <div>
                <Route exact path={`${props.match.path}/`}  component={Home}/>
                <Route exact path={`${props.match.path}/users`} component={Users} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Admin)
