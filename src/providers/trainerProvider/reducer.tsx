import { handleActions } from "redux-actions";
import { INITIAL_STATE, ITrainerStateContext } from "./context";
import { TrainerActionEnum } from "./actions";

export const TrainerReducer = handleActions<ITrainerStateContext, ITrainerStateContext>({
    [TrainerActionEnum.createClientPending]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [TrainerActionEnum.createClientSuccess]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [TrainerActionEnum.createClientError]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [TrainerActionEnum.getClientsPending]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [TrainerActionEnum.getClientsSuccess]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [TrainerActionEnum.getClientsError]: (state, action) => ({
        ...state,
        ...action.payload
    })
}, INITIAL_STATE)