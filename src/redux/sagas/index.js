import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import ActionCreators from '../actionCreators'
import axios from 'axios'

function* login(action) {
    let token = localStorage.getItem('token')
    let user_data  = localStorage.getItem('user')
    const login = yield axios.post('http://localhost:3333/sessions', {
        email: action.email,
        password: action.password
    })
    if (login.data.message) {
        yield put(ActionCreators.signinFailure(login.data.message))        
    } else {
        token = login.data.token.token
        user_data = JSON.stringify(login.data.user)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user_data)
        yield put(ActionCreators.signinSuccess(user_data))
    }
}
function* auth(){
    let token = localStorage.getItem('token')
    let user  = localStorage.getItem('user')
    if (token) {
        try {
            //yield put(ActionCreators.authSuccess(user))
        } catch(err) {
            yield put(ActionCreators.authFailure('invalid token')) 
        }
    } else {
        yield put(ActionCreators.authFailure('no token'))
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login)
    ])
}
