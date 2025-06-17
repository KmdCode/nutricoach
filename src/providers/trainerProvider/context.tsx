import { createContext } from "react";
import { IUser } from "../authProvider/context";

export interface ITrainerStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError:boolean;
    user?:IUser;
    users?:IUser[];
}

export interface ITrainerActionsContext {
    createClient: (user: IUser) => void;
}

export const INITIAL_STATE: ITrainerStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false
}

export const TrainerStateContext = createContext<ITrainerStateContext>(INITIAL_STATE);
export const TrainerActionContext = createContext<ITrainerActionsContext>(undefined!);
