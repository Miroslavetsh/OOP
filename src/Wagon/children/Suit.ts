import { ISteward } from '../../StationWorkers/Steward';
import Wagon, { type IWagon } from '../Wagon';

export default class Suit extends Wagon {
  constructor(steward: ISteward, next: IWagon | null = null) {
    super(steward, next);

    this.steward.affability = 'high';
    this.comfortable = 'yep!!!';
    this.legsInTheAisle = false;
  }
}
