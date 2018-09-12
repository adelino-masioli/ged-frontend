import React, { Component } from 'react'
import { connect } from 'react-redux' 
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
        return (
            <div>
                <h1>Login</h1>
                <input type="text" value={this.state.form.email} onChange={this.handleChange('email')}/>
                <input type="password" value={this.state.form.password} onChange={this.handleChange('password')} />
                <button onClick={this.login}>Logar</button>
                {
                    this.props.auth.error &&
                    <p>Erro ao logar.</p>
                }
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
