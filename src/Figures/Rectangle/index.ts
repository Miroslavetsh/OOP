import GeometricFigure from '../GeometricFigure';

export default class Rectangle extends GeometricFigure {
  a: number;
  b: number | undefined;
  isSquare: boolean;

  constructor(id: string, a: number, b?: number) {
    super(id);

    this.a = a;

    if (b) this.b = b;

    this.isSquare = !b || a === b;
  }

  computePerimeter(): number {
    const { a, b } = this;

    if (!b) {
      return a * 4;
    }

    return (a + b) * 2;
  }

  computeSquare(): number {
    const { a, b, isSquare } = this;

    return isSquare ? a ** 2 : a * b;
  }

  showInterior(): string {
    const { id, a, b, isSquare } = this;
    const IAm = `I am a ${id}`;

    if (isSquare) {
      return `${IAm}, and my each side is ${a}`;
    }

    return `${IAm}, and my a = ${a} and b = ${b}`;
  }
}
