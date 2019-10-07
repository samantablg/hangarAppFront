import { HangarModel } from 'src/app/core/models/hangar.interface';
// Se usa para hangares y productos

export interface Page<T> {
  content: T[];
  pageable: any;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: boolean;
  number: number;
  sort: any;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
