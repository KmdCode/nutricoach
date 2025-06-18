import { createContext } from "react";
import { IUser } from "../authProvider/context";

export interface IClient {
    id?: string,
    fullName?: string,
    email?: string,
    contactNumber?: string,
    sex?: string,
    dateOfBirth?: string,
    activeState?: boolean,
    trainerId?: string,
}

export interface ITrainerActionsContext {
    createClient: (user: IUser) => void;
    getClients: () => void;
}

export interface ITrainerStateContext {
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    client?: IClient,
    clients?: IClient[]
}

export const INITIAL_STATE: ITrainerStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false
}

export const TrainerStateContext = createContext<ITrainerStateContext>(INITIAL_STATE);
export const TrainerActionContext = createContext<ITrainerActionsContext>(undefined!);
