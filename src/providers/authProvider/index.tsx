"use client"
import { useContext, useReducer } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, IUser, AuthStateContext, AuthActionContext } from "./context";
import { AuthReducer } from "./reducer";
import {
    registerTrainerPending,
    registerTrainerSuccess,
    registerTrainerError,
    loginUserPending,
    loginUserSuccess,
    loginUserError,
    registerClientPending,
    registerClientSuccess,
    registerClientError,
    getCurrentUserPending,
    getCurrentUserSuccess,
    getCurrentUserError
} from "./actions";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const instance = axiosInstance();
    const router = useRouter()

    interface IToken {
        id: string;
        name?: string;
        role: string;
        features?: string[];
        iat?: number;
        exp?: string;
    }

    const registerTrainer = async (user: IUser) => {
        dispatch(registerTrainerPending());
        const endpoint: string = '/users/register';

        await instance.post(endpoint, user)
            .then((response) => {
                dispatch(registerTrainerSuccess(response.data))
                router.push('/login')
            }).catch((error) => {
                dispatch(registerTrainerError())
                console.log(error)
                console.log(error.message)
            })
    }

    const loginUser = async (user: IUser) => {
        dispatch(loginUserPending());
        const endpoint: string = '/users/login'

        await instance.post(endpoint, user)
            .then((response) => {
                dispatch(loginUserSuccess(response.data));
                sessionStorage.setItem('token', response.data.data.token);
                const token = jwtDecode<IToken>(JSON.stringify(response.data.data.token));

                console.log(token)
                sessionStorage.setItem('userRole', token.role);
                sessionStorage.setItem('trainerId', token.id)
                if (token.role === "admin") {
                    router.push("/trainer");
                } else if (token.role === "user") {
                    router.push("/client");
                } else {
                    router.push("/login");
                }
            }).catch((error) => {
                dispatch(loginUserError());
                console.log(error.message);
            })
    }

    const registerClient = async (user: IUser) => {
        dispatch(registerClientPending())
        const endpoint = '/users/register/mobile';

        await instance.post(endpoint, user)
            .then((response) => {
                dispatch(registerClientSuccess(response.data))
                router.push('/login')
            }).catch((error) => {
                dispatch(registerClientError());
                console.log(error.message)
            })
    }

    const getCurrentUser = async () => {
        dispatch(getCurrentUserPending())
        const endpoint = '/user/current'

        await instance.get(endpoint)
        .then((response)=>{
            dispatch(getCurrentUserSuccess(response.data.data))
            sessionStorage.setItem("currentUser", JSON.stringify(response.data.data));

        }).catch((error)=>{
            dispatch(getCurrentUserError())
            console.log(error)
        })
    }

    return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{ registerTrainer, loginUser, registerClient, getCurrentUser }}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )
}

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (!context) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}

export const useAuthActions = () => {
    const context = useContext(AuthActionContext);
    if (!context) {
        throw new Error('useAuthActions must be used within a AuthProvider')
    }
    return context;
}