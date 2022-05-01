import Container from './Container/Container';
import { Circle, Rectangle, Triangle } from './Figures';

const container = new Container<Circle | Triangle | Rectangle>([
  new Circle('circ-1', 15),
  new Triangle('tri-1', 12, 15),
  new Rectangle('rect-1', 11),
]);

container.logEachInteriorFilling();
