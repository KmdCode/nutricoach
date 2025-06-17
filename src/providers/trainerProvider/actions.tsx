import { createAction } from "redux-actions";
import { IUser } from "../authProvider/context";
import { ITrainerStateContext } from "./context";

export enum TrainerActionEnum {
    createClientPending = "CREATE_CLIENT_PENDING",
    createClientSuccess = "CREATE_CLIENT_SUCCESS",
    createClientError = "CREATE_CLIENT_ERROR"
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