import { createAction } from "redux-actions";
import { IUser } from "../authProvider/context";
import { IClient } from "./context";
import { ITrainerStateContext } from "./context";

export enum TrainerActionEnum {
    createClientPending = "CREATE_CLIENT_PENDING",
    createClientSuccess = "CREATE_CLIENT_SUCCESS",
    createClientError = "CREATE_CLIENT_ERROR",

    getClientsPending = "GET_CLIENTS_PENDING",
    getClientsSuccess = "GET_CLIENTS_SUCCESS",
    getClientsError = "GET_CLIENTS_ERROR",
}

export const createClientPending = createAction<ITrainerStateContext>(
    TrainerActionEnum.createClientSuccess, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const createClientSuccess = createAction<ITrainerStateContext, IUser>(
    TrainerActionEnum.createClientSuccess, (user: IUser) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            user
        }
    )
)

export const createClientError = createAction<ITrainerStateContext>(
    TrainerActionEnum.createClientError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)

export const getClientsPending = createAction<ITrainerStateContext>(
    TrainerActionEnum.getClientsPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
)

export const getClientsSuccess = createAction<ITrainerStateContext, IClient[]>(
    TrainerActionEnum.getClientsSuccess, (clients: IClient[]) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            clients
    
        }
    )
)

export const getClientsError = createAction<ITrainerStateContext>(
    TrainerActionEnum.getClientsError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true
        }
    )
)