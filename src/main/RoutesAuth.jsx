import React, {Component} from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../component/templates/Header'
import Footer from '../component/templates/Footer'

import Home from '../screens/Home'


class AuthOrApp extends Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);
    }
    showHide(){
        if (this.props.auth.isAuth) {
            return (
                <div className="wrapper">
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Footer />
                </div>
            )
        }
    }
    render() {
        if (!this.props.auth.isAuth) {
            return (
                <Switch>
                    <Redirect to='/' />
                </Switch>
            )
        }
        return (
            <aside>{this.showHide()}</aside>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(AuthOrApp)
