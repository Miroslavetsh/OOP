import Steward from '../src/StationWorkers/Steward';
import { CoupeWagon, EconomyWagon, SuitWagon } from '../src/Wagon/children';

describe('Steward class works', () => {
  const JuliaTheSteward = new Steward('Julia', 'male');
  it('By default affability is undefined', () => {
    expect(JuliaTheSteward.affability).toBe(undefined);
  });

  it('The fields are accessible and correct', () => {
    expect(JuliaTheSteward.name).toBe('Julia');
    expect(JuliaTheSteward.sex).toBe('male');
  });
});

describe('Wagon children tests', () => {
  const TestingStewardJaJa = new Steward('JaJa', 'male');

  it('Economy Wagon Works', () => {
    expect(new EconomyWagon(TestingStewardJaJa).comfortable).toBe('not sure');

    expect(new EconomyWagon(TestingStewardJaJa).legsInTheAisle).toBe(true);

    expect(new EconomyWagon(TestingStewardJaJa).next).toBe(null);

    expect(TestingStewardJaJa.affability).toBe('low');
  });

  it('Coupe Wagon Works', () => {
    expect(new CoupeWagon(TestingStewardJaJa).comfortable).toBe('hm, not bad');

    expect(new CoupeWagon(TestingStewardJaJa).legsInTheAisle).toBe(false);

    expect(new CoupeWagon(TestingStewardJaJa).next).toBe(null);

    expect(TestingStewardJaJa.affability).toBe('mid');
  });

  it('Suit Wagon Works', () => {
    expect(new SuitWagon(TestingStewardJaJa).comfortable).toBe('yep!!!');

    expect(new SuitWagon(TestingStewardJaJa).legsInTheAisle).toBe(false);

    expect(new SuitWagon(TestingStewardJaJa).next).toBe(null);

    expect(TestingStewardJaJa.affability).toBe('high');
  });
});
