import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFoodStateContext } from "./context";
import { FoodActionsEnum } from "./actions";

export const FoodReducer = handleActions<IFoodStateContext, IFoodStateContext>(
  {
    [FoodActionsEnum.getFoodsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.getFoodsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.getFoodsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.getCurrentFoodPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.getCurrentFoodSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.getCurrentFoodError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.createFoodPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.createFoodSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionsEnum.createFoodError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
