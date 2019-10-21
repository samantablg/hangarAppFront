import { Action } from '@ngrx/store';
import { UserModel } from '../../core/models/user.interface';

export enum AuthActionTypes {
 LOGIN_AUTH = '[AUTH] LOGIN_AUTH',
 LOGIN_AUTH_FAIL = '[AUTH] LOGIN_AUTH_FAIL',
 LOGOUT_AUTH = '[AUTH] LOGOUT_AUTH',
 REGISTER_AUTH = '[AUTH] REGISTER_AUTH',
 REGISTER_AUTH_FAIL = '[AUTH] REGISTER_AUTH_FAIL',
 VALIDATE_AUTH = '[AUTH] VALIDATE_AUTH',
 VALIDATED_AUTH = '[AUTH] VALIDATED_AUTH'
}

export class LoginAuth implements Action {
  type = AuthActionTypes.LOGIN_AUTH;

  constructor(public payload: UserModel) {}
}

export class LoginAuthFail implements Action {
  type = AuthActionTypes.LOGIN_AUTH_FAIL;

  constructor(public payload: any) {}
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH;
}

export class RegisterAuth implements Action {
  readonly type = AuthActionTypes.REGISTER_AUTH;

  constructor(public payload: UserModel) {}
}

export class RegisterAuthFail implements Action {
  readonly type = AuthActionTypes.REGISTER_AUTH_FAIL;

  constructor(public payload: any) {}
}

export class ValidateAuth implements Action {
  type = AuthActionTypes.VALIDATE_AUTH;

  constructor(public payload: string) {}
}

export class ValidatedAuth implements Action {
  type = AuthActionTypes.VALIDATED_AUTH;

  constructor(public payload: string) {}
}

export type AuthActions = LoginAuth |
                          LoginAuthFail |
                          LogoutAuth |
                          RegisterAuth |
                          RegisterAuthFail |
                          ValidateAuth |
                          ValidatedAuth;
