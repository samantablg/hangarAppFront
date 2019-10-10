import { MinifiedModel } from './minified.interface';
export interface HangarModel {
  id: number;
  name: string;
  address?: string;
  owner?: string;
  email?: string;
  phone?: number;
  state?: boolean;
}
