import { HangarModel } from 'src/app/core/models/hangar.interface';
import { Action } from '@ngrx/store';
import { Page } from 'src/app/core/models/page.interface';

export const LOAD_HANGARS = '[HANGAR] LOAD_HANGARS';
export const LOADED_HANGARS = '[HANGAR] LOADED_HANGARS';
export const LOAD_HANGARS_PAGE = '[HANGAR] LOAD_HANGARS_PAGE';
export const LOADED_HANGARS_PAGE = '[HANGAR] LOADED_HANGARS_PAGE';

export class HangarsLoadAction implements Action {
  type = LOAD_HANGARS;
}

export class HangarsLoadedAction implements Action {
  type = LOADED_HANGARS;

  constructor(public payload: HangarModel[]) {}
}

export class HangarsLoadPageAction implements Action {
  type = LOAD_HANGARS_PAGE;
}

export class HangarsLoadedPageAction implements Action {
  type = LOADED_HANGARS_PAGE;

  constructor(public payload: Page<HangarModel>) {}
}



