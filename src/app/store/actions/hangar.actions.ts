import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Action } from '@ngrx/store';

export enum HangarsActionTypes {
  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  LOADED_HANGARS = '[HANGAR] LOADED_HANGARS',
  LOAD_HANGARS_FAIL = '[HANGAR] LOAD_HANGARS_FAIL',
  NEW_HANGAR = '[HANGAR] NEW_HANGAR',
  EDIT_HANGAR = '[HANGAR] EDIT_HANGAR',
  DELETE_HANGAR = '[HANGAR] DELETE_HANGAR',
  SELECT_HANGAR = '[HANGAR] SELECT_HANGAR',
  SEARCH_HANGAR = '[HANGAR] SEARCH_HANGAR',
  VALIDATE_HANGAR = '[HANGAR] VALIDATE_HANGAR'
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

export class NewHangar implements Action {
  type = HangarsActionTypes.NEW_HANGAR;

  constructor(public payload: HangarModel) {}
}

export class EditHangar implements Action {
  type = HangarsActionTypes.EDIT_HANGAR;

  constructor(public payload: HangarModel) {}
}

export class DeleteHangar implements Action {
  type = HangarsActionTypes.DELETE_HANGAR;

  constructor(public payload: HangarModel) {}
}

export class SelectHangar implements Action {
  type = HangarsActionTypes.SELECT_HANGAR;

  constructor(public payload: HangarModel) {}
}

export class SearchHangar implements Action {
  type = HangarsActionTypes.SEARCH_HANGAR;

  constructor(public payload: string) {}
}

export class ValidateHangar implements Action {
  type = HangarsActionTypes.VALIDATE_HANGAR;

  constructor(public payload: string) {}
}

export type HangarActions = HangarsLoad |
                            HangarsLoaded |
                            HangarsLoadFail |
                            NewHangar |
                            EditHangar |
                            SelectHangar |
                            SearchHangar |
                            ValidateHangar;

