import {  put } from 'redux-saga/effects'
import { toast } from "react-toastify"
import ActionCreators from '../actionCreators'
import API from './../../main/BaseURL'
import config from './../../config'

export function* createUser(action) {
    let token = localStorage.getItem('token')
    const user = yield API.post('users',
    {
        ...action.user
    },
    {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
    },
    })

    if (user && user.data[0] && user.data[0].message) {
        toast.error(user.data[0].message, {
            position: toast.POSITION.TOP_RIGHT
        })
        yield put(ActionCreators.createUserFailure(user.data[0].message))
    } else {
        toast.success(config.APP_MESSAGE_SAVE_SUCCESS, {
            position: toast.POSITION.TOP_RIGHT
        })
        yield  put(ActionCreators.createUserSuccess(user))
    }
}

export function* getUsers(action) {
    let token = localStorage.getItem('token')
    const user = yield API.get('users',
    {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
    },
    })
    yield  put(ActionCreators.getUsersSuccess(user.data))
}

export function* getUser(action) {
    let token = localStorage.getItem('token')
    const user = yield API.get(`users/${action.id}`,
    {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
    },
    })
    yield  put(ActionCreators.getUserSuccess(user.data))
}

export function* updateUser(action) {
    let token = localStorage.getItem('token')
    const toSave = {...action.user}
    const user = yield API.put(`users/${action.user.id}`, toSave,
    {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
    },
    })

    if (user && user.data[0] && user.data[0].message) {
        toast.error(user.data[0].message, {
            position: toast.POSITION.TOP_RIGHT
        })
        yield put(ActionCreators.updateUserFailure(user.data[0].message))
    } else {
        toast.success(config.APP_MESSAGE_SAVE_SUCCESS, {
            position: toast.POSITION.TOP_RIGHT
        })
        yield  put(ActionCreators.updateUserSuccess(user.data))
    }
}

export function* removeUser(action) {
    let token = localStorage.getItem('token')
    yield API.delete(`users/${action.id}`,
    {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token
    },
    })

    toast.success(config.APP_MESSAGE_REMOVE_SUCCESS, {
        position: toast.POSITION.TOP_RIGHT
    })
    yield  put(ActionCreators.removeUserSuccess(action.id))
}