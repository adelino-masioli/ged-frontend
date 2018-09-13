import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import ActionCreator from '../../redux/actionCreators';

class Login extends Component{
    state = {
        form: {
            email: '',
            password: ''
        }
    }
    handleChange = fieldname => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }
    login = () => {
        const { email, password } = this.state.form
        this.props.login(email, password)
    }

    render(){
        if (this.props.auth.isAuth) {
            if (this.props.auth.user.role === 'admin') {
                return <Redirect to='/admin' />
            }
            if (this.props.auth.user.role === 'user') {
                return <Redirect to='/dashboard' />
            }
        }
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo"><b>Admin</b>LTE</div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.form.email} onChange={this.handleChange('email')}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.form.password} onChange={this.handleChange('password')} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>

                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label> <input type="checkbox" /> Remember Me</label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>

                        
                        <button onClick={this.login}>Logar</button>
                        {
                            this.props.auth.error &&
                            <p>Erro ao logar.</p>
                                }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(ActionCreator.signinRequest(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
