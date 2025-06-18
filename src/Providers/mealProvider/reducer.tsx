import { handleActions } from "redux-actions";
import { INITIAL_STATE, IMealStateContext } from "./context";
import { MealActionsEnum } from "./actions";

export const MealReducer = handleActions<IMealStateContext, IMealStateContext>(
  {
    [MealActionsEnum.getMealsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.getMealsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.getMealsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.getMealClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.getMealClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.getMealClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.createMealPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.createMealSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealActionsEnum.createMealError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
