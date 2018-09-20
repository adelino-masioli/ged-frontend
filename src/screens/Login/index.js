import './Login.css'
import React, { Component } from 'react'
import { connect } from 'react-redux' 
import ActionCreator from '../../redux/actionCreators'
import config from '../../config'


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
    render() {
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo"><aside dangerouslySetInnerHTML={{__html: config.APP_LOGIN_TITLE}} /></div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Entre com seus dados corretamente</p>
                        <div className="form-group has-feedback">
                            <label htmlFor="email">Informe seu e-mail</label>
                            <input type="email" className="form-control" placeholder="Email" value={this.state.form.email} onChange={this.handleChange('email')}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                        <label htmlFor="password">Informe sua senha</label>
                            <input type="password" className="form-control" placeholder="Senha" value={this.state.form.password} onChange={this.handleChange('password')} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <button type="submit" className="btn  btn-block btn-flat btn-login" onClick={this.login}>ENTRAR</button>
                            </div>
                        </div>
                        {
                            this.props.auth.error &&
                            <p className="alert alert-danger alert-login"><aside dangerouslySetInnerHTML={{__html: config.APP_LOGIN_ERROR}} /></p>
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
