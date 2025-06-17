import {createAction} from 'redux-actions';
import { IUser, IAuthStateContext } from './context';


export enum AuthActionEnums {
    //Trainer Registration
    registerTrainerPending = "REGISTER_TRAINER_PENDING",
    registerTrainerSuccess = "REGISTER_TRAINER_SUCCESS",
    registerTrainerError = "REGISTER_TRAINER_ERROR",

    //Trainer Login

    loginUserPending = "User_PENDING",
    loginUserSuccess = "LOGIN_TRAINER_SUCCESS",
    loginUserError = "LOGIN_TRAINER_ERROR",

    //Client Register 

    registerClientPending = "REGISTER_CLIENT_PENDING",
    registerClientSuccess = "REGISTER_CLIENT_SUCCESS",
    registerClientError = "REGISTER_CLIENT_ERROR",

    //Client Login

    loginClientPending = "LOGIN_CLIENT_PENDING",
    loginClientSuccess = "LOGIN_CLIENT_SUCCESS",
    loginClientError = "LOGIN_CLIENT_ERROR"
}

//Trainer Registration
export const registerTrainerPending = createAction<IAuthStateContext>(
    AuthActionEnums.registerTrainerPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const registerTrainerSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.registerTrainerSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)

export const registerTrainerError = createAction<IAuthStateContext>(
    AuthActionEnums.registerTrainerError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
)

//Login Trainer

export const loginUserPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginUserPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const loginUserSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.loginUserSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)

export const loginUserError = createAction<IAuthStateContext>(
    AuthActionEnums.loginUserError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)

//Register Client

export const registerClientPending = createAction<IAuthStateContext>(
    AuthActionEnums.registerClientPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const registerClientSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.registerClientSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)

export const registerClientError = createAction<IAuthStateContext>(
    AuthActionEnums.registerClientError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)

//Login Client

export const loginClientPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginClientPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const loginClientSuccess = createAction<IAuthStateContext, IUser>(
    AuthActionEnums.loginClientSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)
export const loginClientError = createAction<IAuthStateContext>(
    AuthActionEnums.loginClientError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)