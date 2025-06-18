import { createContext } from 'react';

export interface IFoodItem {
    id?: string;
    name?: string;
    protein?: number;
    carbs?: number;
    sugar?: number;
    fat?: number;
    fiber?: number;
    sodium?: number;
    potassium?: number;
    category?: string;
    servingSize?: number;
    cholesterol?: number;
    energy?: number;
}

export interface IFoodItemStateContext {
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    food?: IFoodItem,
    foods?: IFoodItem[]
}

export interface IFoodItemActionContext {
    getFoods: () => void;
    createFood: (food: IFoodItem) => void;
}

export const INITIAL_STATE: IFoodItemStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FoodItemsStateContext = createContext<IFoodItemStateContext>(INITIAL_STATE);
export const FoodItemsActionContext = createContext<IFoodItemActionContext>(undefined!)