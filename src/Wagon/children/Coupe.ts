import { ISteward } from '../../StationWorkers/Steward';
import Wagon, { type IWagon } from '../Wagon';

export default class Coupe extends Wagon {
  constructor(steward: ISteward, next: IWagon | null = null) {
    super(steward, next);

    this.steward.affability = 'mid';
    this.comfortable = 'hm, not bad';
    this.legsInTheAisle = false;
  }
}
