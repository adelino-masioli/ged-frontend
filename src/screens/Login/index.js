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

    render() {
        if (this.props.auth.isAuth) {
            return <Redirect to='/admin' />
        }
 
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo"><b>Gestor</b>GED</div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Informe o e-mail e senha</p>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.form.email} onChange={this.handleChange('email')}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.form.password} onChange={this.handleChange('password')} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <button type="submit" className="btn btn-linkedin btn-block btn-flat" onClick={this.login}>ENTRAR</button>
                            </div>
                        </div>
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
