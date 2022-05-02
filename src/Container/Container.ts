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
      showInterior: figure.showInterior.bind(figure),
    }));
  }

  logEachInteriorFilling() {
    this.filling.forEach(({ perimeter, square, showInterior }) => {
      console.log({
        perimeter,
        square,
        interior: showInterior(),
      });
    });
  }
}
