import {  put } from 'redux-saga/effects'
import ActionCreators from '../actionCreators'
import jwtDecode from 'jwt-decode'
import API from './../../main/BaseURL'

export function* login(action) {
    let token = localStorage.getItem('token')
    const login = yield API.post('sessions', {
        email: action.email,
        password: action.password
    })
    if (login.data.token) {
        token = login.data.token
        localStorage.setItem('token', token)
    
        const user_data = jwtDecode(token)
        localStorage.setItem('user', JSON.stringify(user_data.data))
        yield put(ActionCreators.signinSuccess(JSON.stringify(user_data.data)))
    } else {
        localStorage.clear()
        yield put(ActionCreators.signinFailure(login.data.message))
    }
}
export  function* auth(){
    const token = localStorage.getItem('token')
    if (token) {
        try {
            const user = jwtDecode(token)
            yield put(ActionCreators.authSuccess(JSON.stringify(user.data)))
        } catch(err) {
            yield put(ActionCreators.authFailure('invalid token')) 
        }
    } else {
        yield put(ActionCreators.authFailure('no token'))
    }
}
export  function* destroyAuth() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    yield put(ActionCreators.destroyAuthSuccess())
}