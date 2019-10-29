import { ProfileModel } from 'src/app/core/models/profile.interface';
import { Action } from '@ngrx/store';
export enum ProfileActionTypes {
  LOAD_PROFILE = '[PROFILE] LOAD_PROFILE',
  LOADED_PROFILE = '[PROFILE] LOADED_PROFILE',
  FAIL_PROFILE = '[PROFILE] FAIL_PROFILE',
  EDIT_PROFILE = '[PROFILE] EDIT_PROFILE'
}

export class ProfileLoad implements Action {
  readonly type = ProfileActionTypes.LOAD_PROFILE;
}

export class ProfileLoaded implements Action {
  readonly type = ProfileActionTypes.LOADED_PROFILE;
  constructor(public payload: ProfileModel) {}
}

export class FailProfile implements Action {
  readonly type = ProfileActionTypes.FAIL_PROFILE;
  constructor(public payload: any) {}
}

export class EditProfile implements Action {
  readonly type = ProfileActionTypes.EDIT_PROFILE;
  constructor(public payload: ProfileModel) {}
}

export type ProfileActions = ProfileLoad |
                             ProfileLoaded |
                             FailProfile |
                             EditProfile;
