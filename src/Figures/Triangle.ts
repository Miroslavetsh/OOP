import GeometricFigure from './GeometricFigure';

export default class Triangle extends GeometricFigure {
  a: number;
  b: number | undefined;
  c: number | undefined;
  isRight: boolean;

  constructor(id: string, a: number, b?: number, c?: number) {
    super(id);

    this.a = a;
    this.b = b;
    this.c = c;

    this.isRight = !b || !c || (a === b && b === c);
  }

  computePerimeter(): number {
    const { a, b, c } = this;

    if (!b || !c) {
      return a * 3;
    }

    return a + b + c;
  }

  computeSquare(): number {
    const { a, b, c, isRight } = this;

    if (isRight) {
      return (Math.sqrt(3) / 4) * a ** 2;
    }

    const p = this.computePerimeter() / 2;

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }

  showInterior(): string {
    const { id, a, b, c, isRight } = this;
    const IAm = `I am a ${id}`;

    if (isRight) {
      return `${IAm}, and my each side is ${a}`;
    }

    return `${IAm}, and my a = ${a} b = ${b} and c = ${c}`;
  }
}
