import { HangarsLoadedAction } from './../actions/hangar.actions';
import { initialState } from './../state/hangar.state';
import { HangarState } from '../state/hangar.state';
import * as hangar from '../actions/hangar.actions';

export function hangarReducer(state = initialState, action: hangar.HangarsLoadedAction): HangarState {

  switch (action.type) {
    case hangar.LOAD_HANGARS:
      return {
        ...state
      };
    case hangar.LOADED_HANGARS:
      return {
        ...state,
        hangars: action.payload,
      };

    default:
      return state;
  }
}

/*
case hangar.LOAD_HANGARS_PAGE:
      return {
        ...state
      };
    case hangar.LOADED_HANGARS_PAGE:
      return {
        ...state,
        hangars: action.payload,
      };
*/
