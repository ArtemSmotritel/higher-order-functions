const { flow, hasColor, map, filter, reduce, figures } = require("./functions");

const isBlack = hasColor("black");
const isRed = hasColor("red");
const isSquare = (r) => r.width === r.height;
const calcPerimeter = (r) => (r.width + r.height) * 2;
const sum = (a, b) =>  a + b;

const filterBlackFigures = filter(isBlack);
const filterRedFigures = filter(isRed);
const filterSquares = filter(isSquare);
const findPerimeters = map(calcPerimeter);
const findMaxPerimeter = reduce(Math.max, 0);
const findSumPerimeters = reduce(sum, 0);


const maxBlackPerimeter = flow(
  filterBlackFigures,
  filterSquares,
  findPerimeters,
  findMaxPerimeter
)(figures);

const sumRedPerimeters = flow(
  filterRedFigures,
  findPerimeters,
  findSumPerimeters
)(figures);

console.log(sumRedPerimeters);
console.log(maxBlackPerimeter);
