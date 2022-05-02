import Rectangle from '../';

describe('Rectangle works', () => {
  const testRectangleRight1 = new Rectangle('my-test-rectangle-right1', 10);
  const testRectangleRight2 = new Rectangle('my-test-rectangle-right2', 10, 10);
  const testRectangle = new Rectangle('my-test-rectangle', 11, 12);

  it('Id is defined', () => {
    expect(testRectangle.id).toBe('my-test-rectangle');
  });

  it('Each side is defined', () => {
    expect(testRectangleRight1.a).toBe(10);
    expect(testRectangleRight1.b).toBe(undefined);

    expect(testRectangleRight2.a).toBe(10);
    expect(testRectangleRight2.b).toBe(10);

    expect(testRectangle.a).toBe(11);
    expect(testRectangle.b).toBe(12);
  });

  it('Square can be defined', () => {
    expect(testRectangleRight1.isSquare).toBe(true);
    expect(testRectangleRight2.isSquare).toBe(true);
    expect(testRectangle.isSquare).toBe(false);
  });

  it('Perimeter can be computed correctly', () => {
    expect(testRectangleRight1.computePerimeter()).toBe(40);
    expect(testRectangleRight2.computePerimeter()).toBe(40);
    expect(testRectangle.computePerimeter()).toBe(11 * 2 + 12 * 2);
  });

  it('Square can be computed', () => {
    expect(testRectangleRight1.computeSquare()).toBe(100);
    expect(testRectangleRight2.computeSquare()).toBe(100);
    expect(testRectangle.computeSquare()).toBe(11 * 12);
  });

  it('showInterior works correctly', () => {
    expect(testRectangleRight1.showInterior()).toBe(
      'I am a my-test-rectangle-right1, and my each side is 10',
    );

    expect(testRectangleRight2.showInterior()).toBe(
      'I am a my-test-rectangle-right2, and my each side is 10',
    );

    expect(testRectangle.showInterior()).toBe(
      'I am a my-test-rectangle, and my a = 11 and b = 12',
    );
  });
});
