import { UserModel } from './../../core/models/user.interface';

export interface UserState {
  user: UserModel | null;
  isAuthenticated: boolean;
  isRegister: boolean;
  error: any;
  isUserLogged: boolean;
}

export const initialUserState: UserState = {
  user: null,
  isAuthenticated: false,
  isRegister: false,
  error: null,
  isUserLogged: false
};
