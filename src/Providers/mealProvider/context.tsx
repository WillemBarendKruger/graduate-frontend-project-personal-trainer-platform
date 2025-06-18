import { createContext } from "react";

export interface IMeal {
  name: string;
  mealType: string;
  foodItems: string[];
}

export interface IMeals {
  trainerId: string;
  clientId: string;
  meals: IMeal[];
}

export interface IMealStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  meal?: IMeal;
  meals?: IMeals[];
}

export interface IMealActionsContext {
  getMeals: () => Promise<void>;
  getMealId: (id: string) => Promise<void>;
  getMealClient: (id: string) => Promise<void>;
  createMeal: (meal: IMeal) => Promise<void>;
}

export const INITIAL_STATE: IMealStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  meals: [],
};

export const MealStateContext = createContext<IMealStateContext>(INITIAL_STATE);
export const MealActionContext = createContext<IMealActionsContext | undefined>(
  undefined
);
