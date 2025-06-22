"use client";
import { getAxiosInstance } from "@/utils/axiosInstance";
import {
  INITIAL_STATE,
  MealStateContext,
  MealActionContext,
  IMealplan,
} from "./context";
import { MealplanReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  createMealplanError,
  createMealplanPending,
  createMealplanSuccess,
  getClientMealplansError,
  getClientMealplansPending,
  getClientMealplansSuccess,
  getMealplanByIdError,
  getMealplanByIdPending,
  getMealplanByIdSuccess,
  getTrainerMealplansError,
  getTrainerMealplansPending,
  getTrainerMealplansSuccess,
} from "./actions";

export const MealsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(MealplanReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getTrainerMealplans = async (trainerId: string) => {
    dispatch(getTrainerMealplansPending());
    const endpoint = `mealplan/${trainerId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meals: IMealplan) => ({
          name: meals.name ?? "",
          clientId: meals.clientId ?? "",
          trainerId: meals.trainerId ?? "",
          clientName: meals.clientName ?? "",
          description: meals.descrption ?? "",
          notes: meals.notes ?? "",
          clientNotes: meals.clientNotes ?? [],
          meals: meals.meals ?? "",
          mealTotals: meals.mealTotals ?? {},
          base: meals.base ?? false,
        }));
        dispatch(getTrainerMealplansSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getTrainerMealplansError());
        console.error(error);
      });
  };

  const getClientMealplans = async (clientId: string) => {
    dispatch(getClientMealplansPending());
    const endpoint = `mealplan/${clientId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meals: IMealplan) => ({
          name: meals.name ?? "",
          clientId: meals.clientId ?? "",
          trainerId: meals.trainerId ?? "",
          clientName: meals.clientName ?? "",
          description: meals.descrption ?? "",
          notes: meals.notes ?? "",
          clientNotes: meals.clientNotes ?? [],
          meals: meals.meals ?? "",
          mealTotals: meals.mealTotals ?? {},
          base: meals.base ?? false,
        }));
        dispatch(getClientMealplansSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getClientMealplansError());
        console.error(error);
      });
  };

  const getMealplanById = async (id: string) => {
    dispatch(getMealplanByIdPending());
    const endpoint = `mealplan/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((meal: IMealplan) => ({
          name: meal.name ?? "",
          clientId: meal.clientId ?? "",
          trainerId: meal.trainerId ?? "",
          clientName: meal.clientName ?? "",
          description: meal.descrption ?? "",
          notes: meal.notes ?? "",
          clientNotes: meal.clientNotes ?? [],
          meals: meal.meals ?? "",
          mealTotals: meal.mealTotals ?? {},
          base: meal.base ?? false,
        }));
        dispatch(getMealplanByIdSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(getMealplanByIdError());
        console.error(error);
      });
  };

  const createMealplan = async (Meal: IMealplan) => {
    dispatch(createMealplanPending());
    const endpoint = `mealplan`;

    await instance
      .post(endpoint, Meal)
      .then((response) => {
        const filteredData = response.data.data.map((meals: IMealplan) => ({
          name: meals.name ?? "",
          clientId: meals.clientId ?? "",
          trainerId: meals.trainerId ?? "",
          clientName: meals.clientName ?? "",
          description: meals.descrption ?? "",
          notes: meals.notes ?? "",
          clientNotes: meals.clientNotes ?? [],
          meals: meals.meals ?? "",
          mealTotals: meals.mealTotals ?? {},
          base: meals.base ?? false,
        }));
        dispatch(createMealplanSuccess(filteredData));
      })
      .catch((error) => {
        dispatch(createMealplanError());
        console.error(error);
      });
  };

  return (
    <MealStateContext.Provider value={state}>
      <MealActionContext.Provider
        value={{
          getTrainerMealplans,
          getClientMealplans,
          getMealplanById,
          createMealplan,
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
