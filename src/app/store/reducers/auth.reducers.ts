import { AuthState } from '../state/auth.state';
import { initialAuthState } from '../state/auth.state';
import { AuthActionTypes } from '../actions/auth.actions';

export function authReducer(state = initialAuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_AUTH:
      return {
        ...state,
        user: { ... action.payload },
        isAuthenticated: true
    };
    case AuthActionTypes.LOGIN_AUTH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case AuthActionTypes.LOGOUT_AUTH:
      return {
        ...state,
        user: {
          username: '',
          password: ''
        },
        isAuthenticated: false,
      };
    case AuthActionTypes.REGISTER_AUTH:
      return {
        ...state,
        isUserLogged: true
      };
    case AuthActionTypes.REGISTER_AUTH_FAIL:
      return {
        ...state,
        isUserLogged: false,
        error: action.payload
      };
    case AuthActionTypes.VALIDATE_AUTH:
      return { ...state };
    case AuthActionTypes.VALIDATED_AUTH:
      return {
        ...state,
        isRegister: action.payload
      };
    default:
      return state;
  }
}
