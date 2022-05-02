export interface IGeometricFigure {
  computePerimeter: () => number;
  computeSquare: () => number;
  showInterior: () => string;
}

export default abstract class GeometricFigure implements IGeometricFigure {
  public id: string;

  constructor(id: string) {
    this.id = id;
  }

  computePerimeter() {
    return 0;
  }

  computeSquare() {
    return 0;
  }

  showInterior(): string {
    return '';
  }
}
