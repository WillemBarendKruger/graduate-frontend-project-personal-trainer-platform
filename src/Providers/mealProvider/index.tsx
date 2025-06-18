"use client";
import { getAxiosInstance } from "@/utils/axiosInstance";
import {
  INITIAL_STATE,
  MealStateContext,
  MealActionContext,
  IMeal,
  IMeals,
} from "./context";
import { MealReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  createMealError,
  createMealPending,
  createMealSuccess,
  getMealClientError,
  getMealClientPending,
  getMealClientSuccess,
  getMealIdError,
  getMealIdPending,
  getMealsError,
  getMealsPending,
  getMealsSuccess,
} from "./actions";

export const MealsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(MealReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getMeals = async () => {
    dispatch(getMealsPending());
    const endpoint = `Meal/`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meal: IMeal) => ({
          name: meal.name ?? "",
          mealType: meal.mealType ?? "",
          foodItems: meal.foodItems ?? [],
        }));
        dispatch(getMealsSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getMealsError());
        console.error(error);
      });
  };

  const getMealId = async (id: string) => {
    dispatch(getMealIdPending());
    const endpoint = `mealplan/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meal: IMeal) => ({
          name: meal.name ?? "",
          mealType: meal.mealType ?? "",
          foodItems: meal.foodItems ?? [],
        }));
        dispatch(getMealsSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getMealIdError());
        console.error(error);
      });
  };

  const getMealClient = async (id: string) => {
    dispatch(getMealClientPending());
    const endpoint = `mealplan/client/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meals: IMeals) => ({
          trainerId: meals.trainerId ?? "",
          clientId: meals.clientId ?? "",
          meals: meals.meals ?? [],
        }));
        dispatch(getMealClientSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getMealClientError());
        console.error(error);
      });
  };

  const createMeal = async (Meal: IMeal) => {
    dispatch(createMealPending());
    const endpoint = `/Meal`;

    console.log("Client", Meal);
    await instance
      .post(endpoint, Meal)
      .then((response) => {
        dispatch(createMealSuccess(response.data.data));
        console.log("Meal info", Meal);
      })
      .catch((error) => {
        dispatch(createMealError());
        console.log(error);
      });
  };

  return (
    <MealStateContext.Provider value={state}>
      <MealActionContext.Provider
        value={{
          getMeals,
          getMealId,
          getMealClient,
          createMeal,
        }}
      >
        {children}
      </MealActionContext.Provider>
    </MealStateContext.Provider>
  );
};

export const useMealState = () => {
  const context = useContext(MealStateContext);
  if (!context) {
    throw new Error("useMealState must be used within a MealsProvider");
  }
  return context;
};

export const useMealActions = () => {
  const context = useContext(MealActionContext);
  if (!context) {
    throw new Error("useMealActions must be used within a MealsProvider");
  }
  return context;
};
