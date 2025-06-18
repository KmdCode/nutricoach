"use client"
import { axiosInstance } from "@/utils/axiosInstance"
import { INITIAL_STATE, FoodItemsStateContext, FoodItemsActionContext, IFoodItem } from "./context"
import { FoodReducer } from "./reducer"
import { useContext, useReducer } from "react"
import { 
    getFoodsPending, 
    getFoodsSuccess, 
    getFoodsError, 
    createFoodPending, 
    createFoodSuccess, 
    createFoodError } from "./actions"

export const FoodProvider = ({children}: {children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);
    const instance = axiosInstance();


    const createFood = async(food:IFoodItem) => {
        dispatch(createFoodPending());
        const endpoint = '/food';

        await instance.post(endpoint, food)
        .then((response) => {
            dispatch(createFoodSuccess(response.data.data))
            console.log("food created")
        }).catch((error) => {
            dispatch(createFoodError())
            console.log(error)
        })
    }

        const getFoods = async() => {
            dispatch(getFoodsPending());
            const endpoint ='/food'

            await instance.get(endpoint)
            .then((response)=>{
                dispatch(getFoodsSuccess(response.data.data))
                console.log(response.data.data)
            }).catch((error)=>{
                dispatch(getFoodsError());
                console.log(error)
            })
    }

    return(
        <FoodItemsStateContext.Provider value={state}>
            <FoodItemsActionContext.Provider value={{getFoods, createFood}}>
                {children}
            </FoodItemsActionContext.Provider>
        </FoodItemsStateContext.Provider>
    )
}

export const useFoodItemState = () => {
    const context = useContext(FoodItemsStateContext);
    if(!context){
        throw new Error('useFoodItemState must be used within a FoodProvider');
    }
    return context;
}

export const useFoodItemActions = () => {
    const context = useContext(FoodItemsActionContext);
    if(!context){
        throw new Error('useFoodItemActions must be used within a FoodProvider');
    }
    return context;
}