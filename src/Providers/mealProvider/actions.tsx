import { createAction } from "redux-actions";
import { IMealplan, IMealplanStateContext } from "./context";

export enum MealplanActionsEnum {
  getTrainerMealplansPending = "GET_TRAINER_MEAL_PENDING",
  getTrainerMealplansSuccess = "GET_TRAINER_MEAL_SUCCESS",
  getTrainerMealplansError = "GET_TRAINER_MEAL_ERROR",

  getClientMealplansPending = "GET_CLIENT_MEAL_PENDING",
  getClientMealplansSuccess = "GET_CLIENT_MEAL_SUCCESS",
  getClientMealplansError = "GET_CLIENT_MEAL_ERROR",

  getMealplanByIdPending = "GET_MEAL_ID_PENDING",
  getMealplanByIdSuccess = "GET_MEAL_ID_SUCCESS",
  getMealplanByIdError = "GET_MEAL_ID_ERROR",

  createMealplanPending = "CREATE_MEAL_PENDING",
  createMealplanSuccess = "CREATE_MEAL_SUCCESS",
  createMealplanError = "CREATE_MEAL_ERROR",
}

export const getTrainerMealplansPending = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getTrainerMealplansPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTrainerMealplansSuccess = createAction<
  IMealplanStateContext,
  IMealplan[]
>(MealplanActionsEnum.getTrainerMealplansSuccess, (mealplans: IMealplan[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  mealplans,
}));

export const getTrainerMealplansError = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getTrainerMealplansError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getClientMealplansPending = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getClientMealplansPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getClientMealplansSuccess = createAction<
  IMealplanStateContext,
  IMealplan[]
>(MealplanActionsEnum.getClientMealplansSuccess, (mealplans: IMealplan[]) => {
  return {
    isPending: false,
    isSuccess: true,
    isError: false,
    mealplans,
  };
});

export const getClientMealplansError = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getClientMealplansError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getMealplanByIdPending = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getMealplanByIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getMealplanByIdSuccess = createAction<
  IMealplanStateContext,
  IMealplan
>(MealplanActionsEnum.getMealplanByIdSuccess, (mealplan: IMealplan) => {
  return {
    isPending: false,
    isSuccess: true,
    isError: false,
    mealplan,
  };
});

export const getMealplanByIdError = createAction<IMealplanStateContext>(
  MealplanActionsEnum.getMealplanByIdError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createMealplanPending = createAction<IMealplanStateContext>(
  MealplanActionsEnum.createMealplanPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createMealplanSuccess = createAction<
  IMealplanStateContext,
  string
>(MealplanActionsEnum.createMealplanSuccess, (token: string) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  token: token,
}));

export const createMealplanError = createAction<IMealplanStateContext>(
  MealplanActionsEnum.createMealplanError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
