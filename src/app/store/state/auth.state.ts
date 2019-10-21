import { UserModel } from '../../core/models/user.interface';

export interface AuthState {
  user: UserModel | null;
  isAuthenticated: boolean;
  isRegister: boolean;
  error: any;
  isUserLogged: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isRegister: false,
  error: null,
  isUserLogged: false
};
