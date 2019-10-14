import { HangarModel } from 'src/app/core/models/hangar.interface';

export interface HangarsState {
  hangars: HangarModel[];
  hangarSelected: HangarModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: HangarsState = {
  hangars: [],
  hangarSelected: null,
  loaded: false,
  loading: false,
  error: null
};

/* export interface HangarState {
  hangars: Page<HangarModel>;
} */
