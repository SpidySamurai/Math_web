//Square code ...
console.group("Square calculations");
// const squareSide = 5;
// console.log("square sides are: " + squareSide + "cm");
function calculateSquarePerimeter(squareSide) {
  return squareSide * 4;
}
// const SquarePerimeter = SquareSide * 4;
// console.log("Square perimeter is: " + SquarePerimeter + "cm");
function calculateSquareArea(squareSide) {
  return squareSide ** 2;
}
// const SquareArea = SquareSide * SquareSide;
// console.log("Square area is: " + SquareArea + "cm^2");
console.groupEnd();

//Triangle code...
console.group("Triangule calculations");
// const triangleSideA = 5;
// const triangleSideB = 5;
// const triangleBase = 10;
// const triangleHeight = 5.5;
// console.log(
//   "Triangle side A measures: " +
//     TriangleSideA +
//     "\nTriangle side B measures: " +
//     TriangleSideB +
//     "\nTriangle base measures: " +
//     TriangleBase +
//     "\nTriangle height measures: " +
//     TriangleHeight
// );
function calculateTriangleHeight(triangleSideA, triangleSideB, triangleBase) {
  if (triangleSideA == triangleSideB) {
    const triangleHeight = Math.sqrt(
      triangleSideA ** 2 - triangleBase ** 2 / 4
    );
    return triangleHeight;
  } else {
    console.log("Sides are not equal.");
    alert("Triangle should be isosceles.");
  }
}
function calculateTrianglePerimeter(
  triangleSideA,
  triangleSideB,
  triangleBase
) {
  return triangleSideA + triangleSideB + triangleBase;
}
// const trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
// console.log("Triangle perimeter is: " + TrianglePerimeter + "cm");
function calculateTriangleArea(triangleBase, triangleHeight) {
  return (triangleBase * triangleHeight) / 2;
}
// const TriangleArea = (TriangleBase * TriangleHeight) / 2;
// console.log("Triangle area is: " + TriangleArea + "cm^2");
console.groupEnd();

//Circle code ...
console.group("Circle calculations");
// const CircleRadius = 5;
// const CircleDiameter = CircleRadius * 2;
// const PI = Math.PI;
// console.log(
//   "Circle radius measures: " +
//     CircleRadius +
//     "\nCircle diameter measures: " +
//     CircleDiameter +
//     "\nPI: " +
//     PI
// );
function calculateCircleDiameter(circleRadius) {
  return circleRadius * 2;
}
function calculateCircleCircunference(circleRadius) {
  return calculateCircleDiameter(circleRadius) * Math.PI;
}
// const circleCircunference = circleDiameter * PI;
// console.log("Circle circuference is: " + circleCircunference + "cm");
function calculateCircleArea(circleRadius) {
  return circleRadius ** 2 * Math.PI;
}
// const circleArea = circleRadius * circleRadius * PI;
// console.log("circle area is: " + circleArea + "cm");
console.groupEnd();

// Here we interact with HTML
function squarePerimeter() {
  const input = document.getElementById("squareInput");
  const squareSide = input.value;

  const squarePerimeter = calculateSquarePerimeter(squareSide);
  alert(squarePerimeter);
}

function squareArea() {
  const input = document.getElementById("squareInput");
  const squareSide = input.value;

  const squareArea = calculateSquareArea(squareSide);
  alert(squareArea);
}
