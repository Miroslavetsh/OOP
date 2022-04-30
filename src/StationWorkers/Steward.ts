import { Sex } from '../tools';

export interface ISteward {
  affability: string;
}

export default class Steward implements ISteward {
  name: string;
  sex: Sex;
  affability: string;

  constructor(name: string, sex: Sex) {
    this.name = name;
    this.sex = sex;
  }
}
