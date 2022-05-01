import Circle from '../';

describe('Circle works', () => {
  const testCircle = new Circle('my-test-circle', 10);

  it('Id is defined', () => {
    expect(testCircle.id).toBe('my-test-circle');
  });

  it('Radius is defined', () => {
    expect(testCircle.radius).toBe(10);
  });

  it('Perimeter can be computed', () => {
    expect(testCircle.computePerimeter()).toBe(62.83185);
  });

  it('Square can be computed', () => {
    expect(testCircle.computeSquare()).toBe(314.15927);
  });

  it('showInterior works correctly', () => {
    expect(testCircle.showInterior()).toBe(
      'I am a my-test-circle, and my radius is 10',
    );
  });
});
