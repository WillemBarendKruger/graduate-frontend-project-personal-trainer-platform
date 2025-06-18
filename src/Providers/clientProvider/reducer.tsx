import { handleActions } from "redux-actions";
import { INITIAL_STATE, IUserStateContext } from "./context";
import { UserActionsEnum } from "./actions";

export const UserReducer = handleActions<IUserStateContext, IUserStateContext>(
  {
    [UserActionsEnum.logInPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.logInSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.logInError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.logOutPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.logOutSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      user: undefined,
    }),
    [UserActionsEnum.logOutError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.registerPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.registerSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.registerError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getClientsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getClientsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getClientsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getCurrentUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getCurrentUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.getCurrentUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.createClientPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.createClientSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionsEnum.createClientError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
