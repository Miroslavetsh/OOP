import Steward, { ISteward } from './StationWorkers/Steward';
import { CoupeWagon, EconomyWagon, SuitWagon } from './Wagon/children';
import { IWagon } from './Wagon/Wagon';

const RandomWagon = (steward: ISteward, next: IWagon | null = null) =>
  new [EconomyWagon, CoupeWagon, SuitWagon][Math.floor(Math.random() * 3)](
    steward,
    next,
  );

const stewards: Array<ISteward> = [
  new Steward('July', 'female'),
  new Steward('Gosha', 'male'),
  new Steward('Jake', 'male'),
  new Steward('Maria', 'female'),
  new Steward('Court', 'male'),
  new Steward('Kendrick', 'male'),
  new Steward('Myroslav', 'male'),
];

const buildTrain = (stewards: Array<ISteward>) => {
  if (stewards.length === 1) return RandomWagon(stewards.pop(), null);
  return RandomWagon(stewards.pop(), buildTrain(stewards));
};

const logEachWagon = () => {
  const head = buildTrain(stewards);
  let current = head,
    counter = 1;

  while (current.next) {
    const { steward, comfortable, legsInTheAisle } = current;

    console.log(
      JSON.stringify(
        { counter, steward, comfortable, legsInTheAisle },
        null,
        2,
      ),
    );

    counter++;
    current = current.next;
  }
};

logEachWagon();
