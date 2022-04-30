import { ISteward } from '../StationWorkers/Steward';

export interface IWagon {
  steward: ISteward;
  next: IWagon | null;
}

export default class Wagon implements IWagon {
  steward: ISteward;
  next: IWagon | null;
  comfortable: string;
  legsInTheAisle: boolean;

  constructor(steward: ISteward, next: IWagon | null = null) {
    this.steward = steward;
    this.steward.affability = 'none';
    this.comfortable = 'none';
    this.legsInTheAisle = true
    this.next = next;
  }
}
