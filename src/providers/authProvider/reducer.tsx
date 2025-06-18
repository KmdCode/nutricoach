import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";

export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>({
    [AuthActionEnums.registerTrainerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerTrainerSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerTrainerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginUserPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginUserSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginUserError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerClientPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerClientSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerClientError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginClientPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginClientSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginClientError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.getCurrentUserPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.getCurrentUserSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.getCurrentUserError]: (state, action) => ({
        ...state,
        ...action.payload,
    })
}, INITIAL_STATE)