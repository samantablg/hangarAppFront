import { ProfileModel } from 'src/app/core/models/profile.interface';

export interface ProfileState {
  profile: ProfileModel;
  error: any;
  loading: boolean;
  loaded: boolean;
}

export const initialProfileState: ProfileState = {
  profile: null,
  error: null,
  loading: false,
  loaded: false
};
