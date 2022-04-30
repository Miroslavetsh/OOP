import { ISteward } from '../../StationWorkers/Steward';
import Wagon, { type IWagon } from '../Wagon';

export default class Economy extends Wagon {
  constructor(steward: ISteward, next: IWagon | null = null) {
    super(steward, next);

    this.steward.affability = 'low';
    this.comfortable = 'not sure';
    this.legsInTheAisle = true;
  }
}
