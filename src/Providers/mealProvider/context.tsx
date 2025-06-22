import { createContext } from "react";
import { IFood } from "../foodProvider/context";

export interface Imeal {
  name: string;
  id: string;
  note: string;
  clientNotes: [];
  items: IFood[];
  itemsTotals: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

export interface IMealplan {
  name: string;
  clientId: string;
  trainerId: string;
  clientName: string;
  descrption: string;
  notes: string;
  clientNotes: [];
  meals: [
    {
      name: string;
      id: number;
      note: string;
      clientNotes: [];
      items: [
        {
          name: string;
          quantity: number;
          unit: string;
          calories: number;
          carbs: number;
          protein: number;
          fat: number;
          note: null;
        }
      ];
      itemTotals: {
        calories: number;
        carbs: number;
        protein: number;
        fat: number;
      };
    }
  ];
  mealTotals: { calories: number; carbs: number; protein: number; fat: number };
  base: 1;
}

export interface IMealplanStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  mealplan?: IMealplan;
  mealplans?: IMealplan[];
}

export interface IMealplanActionsContext {
  getTrainerMealplans: (trainerId: string) => Promise<void>;
  getClientMealplans: (clientId: string) => Promise<void>;
  getMealplanById: (id: string) => Promise<void>;
  createMealplan: (mealplan: IMealplan) => Promise<void>;
}

export const INITIAL_STATE: IMealplanStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  mealplans: [],
};

export const MealStateContext =
  createContext<IMealplanStateContext>(INITIAL_STATE);
export const MealActionContext = createContext<
  IMealplanActionsContext | undefined
>(undefined);
