import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import ActionCreators from '../actionCreators'
import {login, auth, destroyAuth} from './auth'
import {createUser, getUsers, getUser, updateUser, removeUser} from './user'


export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
        takeLatest(Types.CREATE_USER_REQUEST, createUser),
        takeLatest(Types.GET_USERS_REQUEST, getUsers),
        takeLatest(Types.GET_USER_REQUEST, getUser),
        takeLatest(Types.UPDATE_USER_REQUEST, updateUser),
        takeLatest(Types.REMOVE_USER_REQUEST, removeUser),
        
        put(ActionCreators.authRequest())
    ])
}
