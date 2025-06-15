import { createAction } from "redux-actions";
import { IClient, IUser } from "./models";
import { IUserStateContext } from "./context";

export enum UserActionsEnum {
  getClientsPending = "GET_CLIENTS_PENDING",
  getClientsSuccess = "GET_CLIENTS_SUCCESS",
  getClientsError = "GET_CLIENTS_ERROR",

  getCurrentUserPending = "GET_CURRENT_USER_PENDING",
  getCurrentUserSuccess = "GET_CURRENT_USER_SUCCESS",
  getCurrentUserError = "GET_CURRENT_USER_ERROR",

  logInPending = "LOG_IN_PENDING",
  logInSuccess = "LOG_IN_SUCCESS",
  logInError = "LOG_IN_ERROR",

  registerPending = "REGISTER_PENDING",
  registerSuccess = "REGISTER_SUCCESS",
  registerError = "REGISTER_ERROR",

  logOutPending = "LOG_OUT_PENDING",
  logOutSuccess = "LOG_OUT_SUCCESS",
  logOutError = "LOG_OUT_ERROR",

  createClientPending = "CREATE_CLIENT_PENDING",
  createClientSuccess = "CREATE_CLIENT_SUCCESS",
  createClientError = "CREATE_CLIENT_ERROR",
}

//GET CURRENT USER ACTIONS
export const getCurrentUserPending = createAction<IUserStateContext>(
  UserActionsEnum.getCurrentUserPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getCurrentUserSuccess = createAction<IUserStateContext, IUser>(
  UserActionsEnum.getCurrentUserSuccess,
  (user: IUser) => {
    // console.log("UserAction",user)
    return {
      isPending: false,
      isSuccess: true,
      isError: false,
      user,
    };
  }
);
export const getCurrentUserError = createAction<IUserStateContext>(
  UserActionsEnum.getClientsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//GET CLIENTS ACTIONS
export const getClientsPending = createAction<IUserStateContext>(
  UserActionsEnum.getClientsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getClientsSuccess = createAction<IUserStateContext, IUser[]>(
  UserActionsEnum.getClientsSuccess,
  (users: IUser[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    users: users,
  })
);

export const getClientsError = createAction<IUserStateContext>(
  UserActionsEnum.getClientsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN IN ACTIONS
export const logInPending = createAction<IUserStateContext>(
  UserActionsEnum.logInPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const logInSuccess = createAction<IUserStateContext, string>(
  UserActionsEnum.logInSuccess,
  (token: string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    token: token,
  })
);

export const logInError = createAction<IUserStateContext>(
  UserActionsEnum.logInError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN UP ACTIONS
export const registerPending = createAction<IUserStateContext>(
  UserActionsEnum.registerPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const registerSuccess = createAction<IUserStateContext, IUser>(
  UserActionsEnum.registerSuccess,
  (user: IUser) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    user: user,
  })
);

export const registerError = createAction<IUserStateContext>(
  UserActionsEnum.registerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN OUT ACTIONS
export const logOutPending = createAction<IUserStateContext>(
  UserActionsEnum.logOutPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const logOutSuccess = createAction<IUserStateContext>(
  UserActionsEnum.logOutSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const logOutError = createAction<IUserStateContext>(
  UserActionsEnum.logOutError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// CREATE CLIENT ACTIONS
export const createClientPending = createAction<IUserStateContext>(
  UserActionsEnum.createClientPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createClientSuccess = createAction<IUserStateContext, IClient>(
  UserActionsEnum.createClientSuccess,
  (client: IClient) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    client,
  })
);

export const createClientError = createAction<IUserStateContext>(
  UserActionsEnum.createClientError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
