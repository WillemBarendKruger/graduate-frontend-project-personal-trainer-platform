"use client";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, UserStateContext, UserActionContext } from "./context";
import { IClient, IUser } from "./models";
import { UserReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getClientsError,
  getClientsPending,
  getClientsSuccess,
  logInPending,
  logInSuccess,
  logInError,
  registerPending,
  registerSuccess,
  registerError,
  logOutPending,
  logOutSuccess,
  logOutError,
  getCurrentUserPending,
  getCurrentUserSuccess,
  getCurrentUserError,
  createClientPending,
  createClientSuccess,
  createClientError,
} from "./actions";
import { useRouter } from "next/navigation";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const instance = getAxiosInstance();
  const router = useRouter();

  const getCurrentUser = async () => {
    dispatch(getCurrentUserPending());
    const endpoint = `user/current`;
    await instance
      .get(endpoint)
      .then((response) => {
        const userData: IUser = { ...response.data.data };
        dispatch(getCurrentUserSuccess(userData));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCurrentUserError());
      });
  };

  const getClients = async (idTrainer: string) => {
    dispatch(getClientsPending());
    const endpoint = `client/trainer/${idTrainer}/clients`;
    try {
      const response = await instance.get(endpoint);
      const filteredData = response.data.data.map((user: IUser) => ({
        fullName: user.fullName,
        email: user.email,
        contactNumber: user.contactNumber,
        dateOfBirth: user.dateOfBirth,
        sex: user.sex,
        trainerId: user.trainerId,
        _id: user._id,
      }));
      dispatch(getClientsSuccess(filteredData));
    } catch (error) {
      dispatch(getClientsError());
      console.log("Error message", error);
    }
  };

  const logIn = async (email: string, password: string) => {
    dispatch(logInPending());
    const endpoint = `users/login`;
    await instance
      .post(endpoint, { email, password })
      .then((response) => {
        const token = response.data.data.token;
        sessionStorage.setItem("token", token);
        getCurrentUser();
        dispatch(logInSuccess(token));
      })
      .catch((error) => {
        console.error(error);
        dispatch(logInError());
      });
  };

  const register = async (user: IUser) => {
    dispatch(registerPending());
    const endpoint =
      user.role === "admin" || user.role === "trainer"
        ? `users/register`
        : `users/register/mobile`;
    await instance
      .post(endpoint, user)
      .then(() => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerError());
        throw error;
      });
  };

  const logOut = () => {
    try {
      dispatch(logOutPending());
      sessionStorage.removeItem("token");
      dispatch(logOutSuccess());
      router.replace("/auth/login");
    } catch {
      dispatch(logOutError());
    }
  };
  const createClient = async (client: IClient) => {
    dispatch(createClientPending());
    const endpoint = `/client`;

    console.log("Client", client);
    await instance
      .post(endpoint, client)
      .then((response) => {
        dispatch(createClientSuccess(response.data.data));
        console.log("Client info", client);
      })
      .catch((error) => {
        dispatch(createClientError());
        console.log(error);
      });
  };
  return (
    <UserStateContext.Provider value={state}>
      <UserActionContext.Provider
        value={{
          getClients,
          getCurrentUser,
          logIn,
          register,
          logOut,
          createClient,
        }}
      >
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error("useUserState must be used within a UsersProvider");
  }
  return context;
};

export const useUserActions = () => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useUserActions must be used within a UsersProvider");
  }
  return context;
};
