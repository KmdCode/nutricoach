"use client"
import { useContext, useReducer } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, TrainerActionContext, TrainerStateContext } from "./context";
import { TrainerReducer } from "./reducer";
import { 
    createClientPending, 
    createClientSuccess, 
    createClientError,
    getClientsPending,
    getClientsSuccess,
    getClientsError,
} from "./actions";
import { IUser } from "../authProvider/context";

export const TrainerProvider = ({children}: {children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(TrainerReducer, INITIAL_STATE);
    const instance = axiosInstance();
    
    const createClient = async (user: IUser) => {
        dispatch(createClientPending())
        const endpoint = '/client';
       
        await instance.post(endpoint,user)
        .then((response)=>{
            dispatch(createClientSuccess(response.data))
        }).catch((error)=>{
            dispatch(createClientError())
            console.log(error.message)
        })
    }

    const getClients = async () => {
        dispatch(getClientsPending());
        const id = sessionStorage.getItem('trainerId');
        const endpoint = `/client/trainer/${id}/clients`;

        await instance.get(endpoint)
            .then((response) => {
                dispatch(getClientsSuccess(response.data.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getClientsError());
            });
    };

    return(
        <TrainerStateContext.Provider value={state}>
            <TrainerActionContext.Provider value={{createClient, getClients}}>
                {children}
            </TrainerActionContext.Provider>
        </TrainerStateContext.Provider>
    )
}

export const useTrainerState = () => {
    const context = useContext(TrainerStateContext);
    if(!context){
        throw new Error('useTrainerState must be used within a TrainerProvider');
    }
    return context;
}

export const useTrainerActions = () => {
    const context = useContext(TrainerActionContext)
    if(!context){
        throw new Error('useTrainerAction must be used within a TrainerProvider')
    }
    return context
}