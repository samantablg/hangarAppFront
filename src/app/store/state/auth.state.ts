import { UserModel } from '../../core/models/user.interface';

export interface AuthState {
  user: UserModel;
  isAuthenticated: boolean;
  isRegister: boolean;
  error: any;
  isUserLogged: boolean;
}

export const initialAuthState: AuthState = {
  user: {
    username: '',
    password: ''
  },
  isAuthenticated: false,
  isRegister: false,
  error: null,
  isUserLogged: false
};
