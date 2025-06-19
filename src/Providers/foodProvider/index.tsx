"use client";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, FoodStateContext, FoodActionContext } from "./context";
import { IFood } from "./context";
import { FoodReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  createFoodError,
  createFoodPending,
  createFoodSuccess,
  getFoodsError,
  getFoodsPending,
  getFoodsSuccess,
  getSearchFoodError,
  getSearchFoodPending,
  getSearchFoodSuccess,
} from "./actions";

export const FoodsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getFoods = async () => {
    dispatch(getFoodsPending());
    const endpoint = `food/`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((food: IFood) => ({
          name: food.name ?? "",
          protein: food.protein ?? "",
          carbs: food.carbs ?? "",
          sugar: food.sugar ?? "",
          fat: food.fat ?? "",
          fiber: food.fiber ?? "",
          sodium: food.sodium ?? "",
          potassium: food.potassium ?? "",
          category: food.category ?? "",
          servingSize: food.servingSize ?? "",
          cholesterol: food.cholesterol ?? "",
          energy: food.energy ?? "",
        }));
        dispatch(getFoodsSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getFoodsError());
        console.error("Error message", error);
      });
  };

  const createFood = async (food: IFood) => {
    dispatch(createFoodPending());
    const endpoint = `/food`;

    await instance
      .post(endpoint, food)
      .then((response) => {
        dispatch(createFoodSuccess(response.data.data));
        getFoods();
      })
      .catch((error) => {
        dispatch(createFoodError());
        console.error(error);
      });
  };

  const getFoodSearch = async (item: string) => {
    dispatch(getSearchFoodPending());
    const endpoint = `food/search/${item}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getSearchFoodSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSearchFoodError());
        console.error("Error message", error);
      });
  };

  const getFoodCategory = async () => {};

  return (
    <FoodStateContext.Provider value={state}>
      <FoodActionContext.Provider
        value={{
          getFoods,
          createFood,
          getFoodSearch,
          getFoodCategory,
        }}
      >
        {children}
      </FoodActionContext.Provider>
    </FoodStateContext.Provider>
  );
};

export const useFoodState = () => {
  const context = useContext(FoodStateContext);
  if (!context) {
    throw new Error("useFoodState must be used within a FoodsProvider");
  }
  return context;
};

export const useFoodActions = () => {
  const context = useContext(FoodActionContext);
  if (!context) {
    throw new Error("useFoodActions must be used within a FoodsProvider");
  }
  return context;
};
