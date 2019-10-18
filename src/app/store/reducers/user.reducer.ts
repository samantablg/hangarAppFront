import { UserState } from './../state/user.state';
import { initialUserState } from '../state/user.state';
import { UserActionTypes } from './../actions/user.actions';

export function userReducer(state = initialUserState, action): UserState {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        user: { ... action.payload },
        isAuthenticated: true
    };
    case UserActionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case UserActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        isUserLogged: true
      };
    case UserActionTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        isUserLogged: false,
        error: action.payload
      };
    case UserActionTypes.VALIDATE_USER:
      return { ...state };
    case UserActionTypes.VALIDATED_USER:
      return {
        ...state,
        isRegister: action.payload
      };
    default:
      return state;
  }
}
