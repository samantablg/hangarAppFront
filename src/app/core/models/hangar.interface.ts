import { Adapter } from './adapter';
/* export interface HangarModel {
  id: number;
  name: string;
  address?: string;
  owner?: string;
  email?: string;
  phone?: number;
  state?: boolean;
} */

export class HangarModel {

  constructor(
    public id: number,
    public name: string,
    public address: string,
    public owner: string,
    public email: string,
    public phone: number,
    public state: boolean,
  ) {}
}

export class HangarAdapter implements Adapter<HangarModel> {
  adapt(item: any) {
    return new HangarModel(
      item.id,
      item.name,
      item.address,
      item.owner,
      item.email,
      item.phone,
      item.state
    );
  }
}
