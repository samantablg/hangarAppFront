import { initialProfileState, ProfileState } from './../state/profile.state';
import * as profile from '../actions/profile.actions';
export function profileReducer(state = initialProfileState, action: profile.ProfileActions): ProfileState {

  switch (action.type) {
    case profile.ProfileActionTypes.LOAD_PROFILE:
      return {
        ...state,
        loading: true
      };
    case profile.ProfileActionTypes.LOADED_PROFILE:
      return {
        ...state,
        loading: false,
        loaded: true,
        profile: action.payload
      };
    case profile.ProfileActionTypes.EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case profile.ProfileActionTypes.FAIL_PROFILE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
