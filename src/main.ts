import Steward, { ISteward } from './StationWorkers/Steward';
import { buildTrain } from './tools';

const stewards: Array<ISteward> = [
  new Steward('July', 'female'),
  new Steward('Gosha', 'male'),
  new Steward('Jake', 'male'),
  new Steward('Maria', 'female'),
  new Steward('Court', 'male'),
  new Steward('Kendrick', 'male'),
  new Steward('Myroslav', 'male'),
];

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
