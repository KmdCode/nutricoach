import { createContext } from "react";

export interface IUser {
    trainerId?: string;
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    dateOfBirth?: Date;
    role?: string;
    contactNumber?: string;
    planType?: string;
    activeStatus?: boolean;
    trial?: boolean;
    policiesAccepted?: boolean;
}

export interface IAuthStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean; 
    user?:IUser;
}

export interface IAuthActionContext {
    registerTrainer: (user: IUser) => void;
    loginUser: (user: IUser) => void;
    registerClient: (user:IUser) => void;
    // loginClient: (user:IUser) => void;
}

export const INITIAL_STATE: IAuthStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionContext>(undefined!)