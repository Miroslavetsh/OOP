import GeometricFigure from '../GeometricFigure';

const { PI } = Math;

export default class Circle extends GeometricFigure {
  radius: number;

  constructor(id: string, radius: number) {
    super(id);

    this.radius = radius;
  }

  computePerimeter(): number {
    return Number((2 * PI * this.radius).toFixed(5));
  }

  computeSquare(): number {
    return Number((PI * this.radius ** 2).toFixed(5));
  }

  showInterior(): string {
    return `I am a ${this.id}, and my radius is ${this.radius}`;
  }
}
