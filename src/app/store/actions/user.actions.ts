import { Action } from '@ngrx/store';
import { UserModel } from './../../core/models/user.interface';

export enum UserActionTypes {
 LOGIN_USER = '[USER] LOGIN_USER',
 LOGIN_USER_FAIL = '[USER] LOGIN_USER_FAIL',
 LOGOUT_USER = '[USER] LOGOUT_USER',
 REGISTER_USER = '[USER] REGISTER_USER',
 REGISTER_USER_FAIL = '[USER] REGISTER_USER_FAIL',
 VALIDATE_USER = '[USER] VALIDATE_USER',
 VALIDATED_USER = '[USER] VALIDATED_USER'
}

export class LoginUser implements Action {
  type = UserActionTypes.LOGIN_USER;

  constructor(public payload: UserModel) {}
}

export class LoginUserFail implements Action {
  type = UserActionTypes.LOGIN_USER_FAIL;

  constructor(public payload: any) {}
}

export class LogoutUser implements Action {
  readonly type = UserActionTypes.LOGOUT_USER;
}

export class RegisterUser implements Action {
  readonly type = UserActionTypes.REGISTER_USER;

  constructor(public payload: UserModel) {}
}

export class RegisterUserFail implements Action {
  readonly type = UserActionTypes.REGISTER_USER_FAIL;

  constructor(public payload: any) {}
}

export class ValidateUser implements Action {
  type = UserActionTypes.VALIDATE_USER;

  constructor(public payload: string) {}
}

export class ValidatedUser implements Action {
  type = UserActionTypes.VALIDATED_USER;

  constructor(public payload: string) {}
}

export type UserActions = LoginUser |
                          LoginUserFail |
                          LogoutUser |
                          RegisterUser |
                          RegisterUserFail |
                          ValidateUser |
                          ValidatedUser;
