import { createContext } from "react";
import { IClient, IUser } from "./models";

export interface IUserStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  user?: IUser;
  users?: IUser[];
}

export interface IUserActionsContext {
  getClients: (idTrainer: string) => Promise<void>;
  getCurrentUser: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  register: (user: IUser) => Promise<void>;
  logOut: () => void;
  createClient: (client: IClient) => Promise<void>;
  client?: IClient;
}

export const INITIAL_STATE: IUserStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  users: [],
};

export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);
export const UserActionContext = createContext<IUserActionsContext | undefined>(
  undefined
);
