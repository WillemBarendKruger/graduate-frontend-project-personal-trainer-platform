import { createAction } from "redux-actions";
import { IMeal, IMeals, IMealStateContext } from "./context";

export enum MealActionsEnum {
  getMealsPending = "GET_MEALS_PENDING",
  getMealsSuccess = "GET_MEALS_SUCCESS",
  getMealsError = "GET_MEALS_ERROR",

  getMealClientPending = "GET_CLIENT_MEAL_PENDING",
  getMealClientSuccess = "GET_CLIENT_MEAL_SUCCESS",
  getMealClientError = "GET_CLIENT_MEAL_ERROR",

  createMealPending = "CREATE_MEAL_PENDING",
  createMealSuccess = "CREATE_MEAL_SUCCESS",
  createMealError = "CREATE_MEAL_ERROR",

  getMealIdPending = "GET_ID_PENDING",
  getMealIdSuccess = "GET_ID_SUCCESS",
  getMealIdError = "GET_ID_ERROR",
}

export const getMealClientPending = createAction<IMealStateContext>(
  MealActionsEnum.getMealClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getMealClientSuccess = createAction<IMealStateContext, IMeal>(
  MealActionsEnum.getMealClientSuccess,
  (meal: IMeal) => {
    return {
      isPending: false,
      isSuccess: true,
      isError: false,
      meal,
    };
  }
);
export const getMealClientError = createAction<IMealStateContext>(
  MealActionsEnum.getMealClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getMealsPending = createAction<IMealStateContext>(
  MealActionsEnum.getMealsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getMealsSuccess = createAction<IMealStateContext, IMeals[]>(
  MealActionsEnum.getMealsSuccess,
  (meals: IMeals[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    meals: meals,
  })
);

export const getMealsError = createAction<IMealStateContext>(
  MealActionsEnum.getMealsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createMealPending = createAction<IMealStateContext>(
  MealActionsEnum.createMealPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createMealSuccess = createAction<IMealStateContext, string>(
  MealActionsEnum.createMealSuccess,
  (token: string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    token: token,
  })
);

export const createMealError = createAction<IMealStateContext>(
  MealActionsEnum.createMealError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getMealIdPending = createAction<IMealStateContext>(
  MealActionsEnum.getMealIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getMealIdSuccess = createAction<IMealStateContext, IMeal>(
  MealActionsEnum.getMealIdSuccess,
  (meal: IMeal) => {
    return {
      isPending: false,
      isSuccess: true,
      isError: false,
      meal,
    };
  }
);
export const getMealIdError = createAction<IMealStateContext>(
  MealActionsEnum.getMealIdError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
