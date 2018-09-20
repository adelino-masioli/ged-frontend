import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from '../screens/Login'

import RoutesAuth from './RoutesAuth'

class AuthOrApp extends Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);
    }

    showHide() {
        if (!this.props.auth.isAuth) {
            return (
                <aside>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/login' component={Login} />
                </aside>
            )
        }
    }
    render() {
        if (this.props.auth.isAuth) {
            return (
                <RoutesAuth/>
            )
        } else {
            return (
                <div>{this.showHide()}</div>
            )            
        }
        
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AuthOrApp)
