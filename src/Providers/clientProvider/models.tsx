export interface ITrainer {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  contactNumber: string;
  planType?: string;
  activeState: boolean;
  trial: boolean;
  dateOfBirth: string;
  policiesAccepted: boolean;
  trainerId: string;
}

export interface IClient {
  fullName: string;
  email: string;
  contactNumber: string;
  sex: string;
  dateOfBirth: string;
  activeState: boolean;
  trainerId: string;
}

export interface IUser {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
  contactNumber: string;
  planType?: string;
  activeState?: boolean;
  trial?: boolean;
  dateOfBirth?: string;
  policiesAccepted?: boolean;
  trainerId?: string;
  token?: string;
  sex?: string;
  date?: string;
  __v?: string;
  fullName?: string;
  user?: string;
}
