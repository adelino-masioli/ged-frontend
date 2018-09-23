import React, {Component} from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import config from '../config'

import Header from '../component/templates/Header'
import Footer from '../component/templates/Footer'

import Home from '../screens/Home'
import UserCreate from '../screens/Admin/User/Create'
import UserList from '../screens/Admin/User/List'
import UserEdit from '../screens/Admin/User/Edit'


class AuthOrApp extends Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);       
    }
    componentWillMount() {
        document.title = config.APP_TITLE;
    }
    showHide(){
        if (this.props.auth.isAuth) {
            return (
                <div className="wrapper">
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/user/create' component={UserCreate} />
                    <Route exact path='/users' component={UserList} />
                    <Route exact path='/users/:id/edit' component={UserEdit} />
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
        } else {
            return (
                <aside>{this.showHide()}</aside>
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
