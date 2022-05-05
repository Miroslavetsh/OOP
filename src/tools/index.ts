import { ISteward } from '../StationWorkers/Steward';
import { CoupeWagon, EconomyWagon, SuitWagon } from '../Wagon/children';
import { IWagon } from '../Wagon/Wagon';

export type Sex = 'male' | 'female';

export const RandomWagon = (steward: ISteward, next: IWagon | null = null) =>
  new [EconomyWagon, CoupeWagon, SuitWagon][Math.floor(Math.random() * 3)](
    steward,
    next,
  );

export const buildTrain = (stewards: Array<ISteward>) => {
  if (stewards.length === 1) return RandomWagon(stewards.pop(), null);
  return RandomWagon(stewards.pop(), buildTrain(stewards));
};
