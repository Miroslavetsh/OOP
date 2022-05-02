import Triangle from '../';

describe('Triangle works', () => {
  const testTriangleRight1 = new Triangle('my-test-triangle-right1', 10);
  const testTriangleRight2 = new Triangle('my-test-triangle-right2', 10, 10);
  const testTriangleRight3 = new Triangle(
    'my-test-triangle-right3',
    10,
    10,
    10,
  );
  const testTriangleRight4 = new Triangle(
    'my-test-triangle-right4',
    10,
    undefined,
    10,
  );
  const testTriangle = new Triangle('my-test-triangle', 11, 12, 13);

  it('Id is defined', () => {
    expect(testTriangle.id).toBe('my-test-triangle');
  });

  it('Each side is defined', () => {
    expect(testTriangleRight1.a).toBe(10);
    expect(testTriangleRight1.b).toBe(undefined);
    expect(testTriangleRight1.c).toBe(undefined);

    expect(testTriangleRight2.a).toBe(10);
    expect(testTriangleRight2.b).toBe(10);
    expect(testTriangleRight2.c).toBe(undefined);

    expect(testTriangleRight3.a).toBe(10);
    expect(testTriangleRight3.b).toBe(10);
    expect(testTriangleRight3.c).toBe(10);

    expect(testTriangle.a).toBe(11);
    expect(testTriangle.b).toBe(12);
  });

  it('Right triangles can be defined', () => {
    expect(testTriangleRight1.isRight).toBe(true);
    expect(testTriangleRight2.isRight).toBe(true);
    expect(testTriangleRight3.isRight).toBe(true);
    expect(testTriangleRight4.isRight).toBe(true);
    expect(testTriangle.isRight).toBe(false);
  });

  it('Perimeter can be computed correctly', () => {
    expect(testTriangleRight1.computePerimeter()).toBe(30);
    expect(testTriangleRight2.computePerimeter()).toBe(30);
    expect(testTriangleRight3.computePerimeter()).toBe(30);
    expect(testTriangleRight4.computePerimeter()).toBe(30);
    expect(testTriangle.computePerimeter()).toBe(11 + 12 + 13);
  });

  it('Square can be computed', () => {
    expect(testTriangleRight1.computeSquare()).toBe(43.30127);
    expect(testTriangleRight2.computeSquare()).toBe(43.30127);
    expect(testTriangleRight3.computeSquare()).toBe(43.30127);
    expect(testTriangleRight4.computeSquare()).toBe(43.30127);
    expect(testTriangle.computeSquare()).toBe(61.48170);
  });

  it('showInterior works correctly', () => {
    expect(testTriangleRight1.showInterior()).toBe(
      'I am a my-test-triangle-right1, and my each side is 10',
    );

    expect(testTriangleRight2.showInterior()).toBe(
      'I am a my-test-triangle-right2, and my each side is 10',
    );

    expect(testTriangleRight3.showInterior()).toBe(
      'I am a my-test-triangle-right3, and my each side is 10',
    );

    expect(testTriangleRight4.showInterior()).toBe(
      'I am a my-test-triangle-right4, and my each side is 10',
    );

    expect(testTriangle.showInterior()).toBe(
      'I am a my-test-triangle, and my a = 11 b = 12 and c = 13',
    );
  });
});
