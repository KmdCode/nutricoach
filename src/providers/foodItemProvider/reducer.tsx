import { handleActions } from "redux-actions"
import { INITIAL_STATE, IFoodItemStateContext } from "./context"
import { FoodActionEnums } from "./actions"

export const FoodReducer = handleActions<IFoodItemStateContext, IFoodItemStateContext>(
  {
    [FoodActionEnums.getFoodsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }, INITIAL_STATE,
)