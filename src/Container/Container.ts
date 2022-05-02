import GeometricFigure from '../Figures/GeometricFigure';

interface ContainerItem {
  id: string;
  perimeter: number;
  square: number;
  showInterior: () => string;
}

export default class Container<T extends GeometricFigure> {
  filling: Array<ContainerItem>;

  constructor(filling: Array<T>) {
    this.filling = filling.map((figure) => ({
      id: figure.id,
      perimeter: figure.computePerimeter(),
      square: figure.computeSquare(),
      showInterior: figure.showInterior,
    }));
  }

  logEachInteriorFilling() {
    this.filling.forEach((figure) => {
      console.log({
        perimeter: figure.perimeter,
        square: figure.perimeter,
        interior: figure.showInterior.call(figure),
      });
    });
  }
}
