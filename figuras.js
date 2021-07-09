//Square code ...
console.group("Square calculations");
const SquareSide = 5;
console.log("Square sides are: " + SquareSide + "cm");

const SquarePerimeter = SquareSide * 4;
console.log("Square perimeter is: " + SquarePerimeter + "cm");

const SquareArea = SquareSide * SquareSide;
console.log("Square area is: " + SquareArea + "cm^2");
console.groupEnd;

//Triangle code...
console.group("Triangule calculations");
const TriangleSideA = 5;
const TriangleSideB = 5;
const TriangleBase = 10;
const TriangleHeight = 5.5;
console.log(
  "Triangle side A measures: " +
    TriangleSideA +
    "\nTriangle side B measures: " +
    TriangleSideB +
    "\nTriangle base measures: " +
    TriangleBase +
    "\nTriangle height measures: " +
    TriangleHeight
);

const TrianglePerimeter = TriangleSideA + TriangleSideB + TriangleBase;
console.log("Triangle perimeter is: " + TrianglePerimeter + "cm");

const TriangleArea = (TriangleBase * TriangleHeight) / 2;
console.log("Triangle area is: " + TriangleArea + "cm^2");
console.groupEnd;

//Circle code ...
console.group("Circle calculations");
const CircleRadius = 5;
const CircleDiameter = CircleRadius * 2;
const PI = Math.PI;
console.log(
  "Circle radius measures: " +
    CircleRadius +
    "\nCircle diameter measures: " +
    CircleDiameter +
    "\nPI: " +
    PI
);
const CircleCircunference = CircleDiameter * PI;
console.log("Circle circuference is: " + CircleCircunference + "cm");
const CircleArea = CircleRadius * CircleRadius * PI;
console.log("Circle area is: " + CircleArea + "cm");
console.groupEnd;
