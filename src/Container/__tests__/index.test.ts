import { Circle, Rectangle, Triangle } from '../../Figures';
import Container from '../Container';

describe('Container works', () => {
  const testEmptyContainer = new Container([]);
  const testContainer = new Container([
    new Circle('test-circle', 12),
    new Rectangle('test-square', 12),
    new Triangle('test-right-triangle', 12),
  ]);

  it('Can be empty', () => {
    expect(testEmptyContainer.filling).toEqual([]);
  });

  it('Can contain different figures', () => {
    expect(testContainer.filling[0].id).toBe('test-circle');
    expect(testContainer.filling[0].perimeter).toBe(75.39822);
    expect(testContainer.filling[0].square).toBe(452.38934);

    expect(testContainer.filling[1].id).toBe('test-square');
    expect(testContainer.filling[1].perimeter).toBe(48);
    expect(testContainer.filling[1].square).toBe(144);

    expect(testContainer.filling[2].id).toBe('test-right-triangle');
    expect(testContainer.filling[2].perimeter).toBe(36);
    expect(testContainer.filling[2].square).toBe(62.35383);
  });

  it('Can log each contained figure', () => {
    expect(testContainer.logEachInteriorFilling()).toMatchInlineSnapshot(
      'undefined',
    );
  });
});
