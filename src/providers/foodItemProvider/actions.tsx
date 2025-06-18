import { createAction } from "redux-actions"
import { IFoodItemStateContext, IFoodItem } from "./context"

export enum FoodActionEnums {
    getFoodsPending = "GET_FOODS_PENDING",
    getFoodsSuccess = "GET_FOODS_SUCCESS",
    getFoodsError = "GET_FOODS_ERROR",

    createFoodPending = "CREATE_FOOD_PENDING",
    createFoodSuccess = "CREATE_FOOD_SUCCESS",
    createFoodError = "CREATE_FOOD_ERROR",
}

export const getFoodsPending = createAction<IFoodItemStateContext>(
    FoodActionEnums.getFoodsPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getFoodsSuccess = createAction<IFoodItemStateContext, IFoodItem[]>(
    FoodActionEnums.getFoodsSuccess,
    (foods: IFoodItem[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        foods,
    }),
)

export const getFoodsError = createAction<IFoodItemStateContext>(
    FoodActionEnums.getFoodsError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)

export const createFoodPending = createAction<IFoodItemStateContext>(
    FoodActionEnums.createFoodPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const createFoodSuccess = createAction<IFoodItemStateContext, IFoodItem>(
    FoodActionEnums.createFoodSuccess, (food: IFoodItem) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        food,
    }),
)

export const createFoodError = createAction<IFoodItemStateContext>(
    FoodActionEnums.createFoodError, () => ({

        isPending: false,
        isSuccess: false,
        isError: true,
    })
)