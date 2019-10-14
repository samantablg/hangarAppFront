import { HangarsState } from './../state/hangars.state';
import * as hangars from '../actions/hangars.actions';
import { HangarsActionTypes } from '../actions/hangars.actions';
import { initialState } from '../state/hangars.state';

export function hangarsReducer(state = initialState, action: hangars.HangarActions): HangarsState {

  switch (action.type) {
    case HangarsActionTypes.LOAD_HANGARS:
      return {
        ...state,
        loading: true
      };
    case HangarsActionTypes.LOADED_HANGARS:
      return {
        ...state,
        loading: false,
        loaded: true,
        hangars: [...action.payload],
      };
    case HangarsActionTypes.LOAD_HANGARS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    case HangarsActionTypes.DELETE_HANGAR:
      return {
        ...state
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
