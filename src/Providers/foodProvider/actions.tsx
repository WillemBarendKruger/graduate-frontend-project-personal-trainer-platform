import { createAction } from "redux-actions";
import { IFood, IFoodStateContext } from "./context";

export enum FoodActionsEnum {
  getFoodsPending = "GET_FOODS_PENDING",
  getFoodsSuccess = "GET_FOODS_SUCCESS",
  getFoodsError = "GET_FOODS_ERROR",

  getCurrentFoodPending = "GET_CURRENT_FOOD_PENDING",
  getCurrentFoodSuccess = "GET_CURRENT_FOOD_SUCCESS",
  getCurrentFoodError = "GET_CURRENT_FOOD_ERROR",

  createFoodPending = "CREATE_FOOD_PENDING",
  createFoodSuccess = "CREATE_FOOD_SUCCESS",
  createFoodError = "CREATE_FOOD_ERROR",

  getFoodSearchPending = "GET_SEARCH_PENDING",
  getFoodSearchSuccess = "GET_SEARCH_SUCCESS",
  getFoodSearchError = "GET_SEARCH_ERROR",
}

export const getCurrentFoodPending = createAction<IFoodStateContext>(
  FoodActionsEnum.getCurrentFoodPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getCurrentfoodSuccess = createAction<IFoodStateContext, IFood>(
  FoodActionsEnum.getCurrentFoodSuccess,
  (food: IFood) => {
    return {
      isPending: false,
      isSuccess: true,
      isError: false,
      food,
    };
  }
);
export const getCurrentFoodError = createAction<IFoodStateContext>(
  FoodActionsEnum.getCurrentFoodError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getFoodsPending = createAction<IFoodStateContext>(
  FoodActionsEnum.getFoodsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFoodsSuccess = createAction<IFoodStateContext, IFood[]>(
  FoodActionsEnum.getFoodsSuccess,
  (foods: IFood[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    foods: foods,
  })
);

export const getFoodsError = createAction<IFoodStateContext>(
  FoodActionsEnum.getFoodsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createFoodPending = createAction<IFoodStateContext>(
  FoodActionsEnum.createFoodPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createFoodSuccess = createAction<IFoodStateContext, string>(
  FoodActionsEnum.createFoodSuccess,
  (token: string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    token: token,
  })
);

export const createFoodError = createAction<IFoodStateContext>(
  FoodActionsEnum.createFoodError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getSearchFoodPending = createAction<IFoodStateContext>(
  FoodActionsEnum.getFoodSearchPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getSearchFoodSuccess = createAction<IFoodStateContext, IFood>(
  FoodActionsEnum.getFoodSearchSuccess,
  (food: IFood) => {
    return {
      isPending: false,
      isSuccess: true,
      isError: false,
      food,
    };
  }
);
export const getSearchFoodError = createAction<IFoodStateContext>(
  FoodActionsEnum.getFoodSearchError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
