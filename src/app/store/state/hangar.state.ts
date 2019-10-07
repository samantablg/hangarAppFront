import { HangarModel } from 'src/app/core/models/hangar.interface';

export interface HangarState {
  hangars: HangarModel[];
}

export const initialState: HangarState = {
  hangars: null
};

/* export interface HangarState {
  hangars: Page<HangarModel>;
} */
