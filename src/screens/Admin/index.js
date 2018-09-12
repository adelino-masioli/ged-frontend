import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = props => <h1>Home Admin</h1>
const Users = props => <h1>Users Admin</h1>

const Admin = props => {
    if (!props.auth.isAuth) {
        return <Redirect to='/login'/>
    }
    return (
        <div>
            <h1>Admin</h1>
            <p>
                {JSON.stringify(props.auth)}
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
