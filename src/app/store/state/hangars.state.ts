import { HangarModel } from 'src/app/core/models/hangar.interface';

export interface HangarsState {
  hangars: HangarModel[] | [];
  hangarSelected: HangarModel | null;
  isHangar: boolean;
  loaded: boolean;
  loading: boolean;
  error: any | null;
}

export const initialState: HangarsState = {
  hangars: [],
  hangarSelected: null,
  isHangar: false,
  loaded: false,
  loading: false,
  error: null
};

/* export interface HangarState {
  hangars: Page<HangarModel>;
} */
