import { handleActions } from "redux-actions";
import { INITIAL_STATE, IMealplanStateContext } from "./context";
import { MealplanActionsEnum } from "./actions";

export const MealplanReducer = handleActions<
  IMealplanStateContext,
  IMealplanStateContext
>(
  {
    [MealplanActionsEnum.getTrainerMealplansPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getTrainerMealplansSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getTrainerMealplansError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getClientMealplansPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getClientMealplansSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getClientMealplansError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getMealplanByIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getMealplanByIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.getMealplanByIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.createMealplanPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.createMealplanSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MealplanActionsEnum.createMealplanError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
