const { flow, hasColor, map, filter, reduce } = require("./functions");

const figures = [
  {
    width: 50,
    height: 50,
    color: "black",
  },
  {
    width: 80,
    height: 80,
    color: "black",
  },
  {
    width: 180,
    height: 80,
    color: "black",
  },
  {
    width: 10,
    height: 50,
    color: "red",
  },
  {
    width: 60,
    height: 50,
    color: "red",
  },
  {
    width: 50,
    height: 150,
    color: "white",
  },
  {
    width: 40,
    height: 40,
    color: "white",
  },
  {
    width: 80,
    height: 80,
    color: "yellow",
  },
  {
    width: 800,
    height: 800,
    color: "yellow",
  },
];

const isBlack = hasColor("black");
const isRed = hasColor("red");
const isSquare = (r) => r.width === r.height;
const calcPerimeter = (r) => (r.width + r.height) * 2;
const calcSquare = (r) => r.width * r.height;
const sum = (a, b) => a + b;

const filterBlackFigures = filter(isBlack);
const filterRedFigures = filter(isRed);
const filterSquares = filter(isSquare);
const findPerimeters = map(calcPerimeter);
const findMaxSquare = reduce(Math.max, 0);
const findSumPerimeters = reduce(sum, 0);
const findSquares = map(calcSquare);

const maxBlackSquare = flow(
  filterBlackFigures,
  filterSquares,
  findSquares,
  findMaxSquare
)(figures);

const sumRedPerimeters = flow(
  filterRedFigures,
  findPerimeters,
  findSumPerimeters
)(figures);

console.log(sumRedPerimeters);
console.log(maxBlackSquare);
