import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
        signinRequest: ['email', 'password'],
        signinSuccess: ['user'],
        signinFailure: ['error'],

        authRequest: null,
        authSuccess: ['user'],
        authFailure: null,

        destroyAuthRequest: null,
        destroyAuthSuccess: ['user'],

        //user
        createUserRequest: ['user'],
        createUserSuccess: ['user'],
        createUserFailure: ['error'],
        createUserReset: null,

        getUsersRequest: null,
        getUsersSuccess: ['users'],
        getUsersFailure: null,

        getUserRequest: ['id'],
        getUserSuccess: ['user'],
        getUserFailure: null,

        updateUserRequest: ['user'],
        updateUserSuccess: ['user'],
        updateUserFailure: ['error'],
        updateUserReset: null,

        removeUserRequest: ['id'],
        removeUserSuccess: ['id'],
        removeUserFailure: ['error']

    })
export default Creators
