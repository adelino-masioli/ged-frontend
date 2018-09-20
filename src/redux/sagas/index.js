import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import {login, auth, destroyAuth} from './auth'


export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
        
        //put(ActionCreators.authRequest())
    ])
}
