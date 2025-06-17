import { createContext } from "react";

export interface IFood {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  fiber: number;
  sodium: number;
  potassium: number;
  category: string;
  servingSize: number;
  cholesterol: number;
  energy: number;
}

export interface IFoodStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  food?: IFood;
  foods?: IFood[];
}

export interface IFoodActionsContext {
  getFoods: () => Promise<void>;
  getFoodSearch: (irem: string) => Promise<void>;
  getFoodCategory: () => Promise<void>;
  createFood: (food: IFood) => Promise<void>;
}

export const INITIAL_STATE: IFoodStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  foods: [],
};

export const FoodStateContext = createContext<IFoodStateContext>(INITIAL_STATE);
export const FoodActionContext = createContext<IFoodActionsContext | undefined>(
  undefined
);
