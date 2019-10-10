import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Action } from '@ngrx/store';

export enum HangarsActionTypes {
  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  LOADED_HANGARS = '[HANGAR] LOADED_HANGARS',
  LOAD_HANGARS_FAIL = '[HANGAR] LOAD_HANGARS_FAIL'
}

export class HangarsLoad implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS;
}

export class HangarsLoaded implements Action {
  type = HangarsActionTypes.LOADED_HANGARS;

  constructor(public payload: HangarModel[]) {}
}

export class HangarsLoadFail implements Action {
  type = HangarsActionTypes.LOAD_HANGARS_FAIL;

  constructor(public payload: any) {}
}

