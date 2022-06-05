const figures = [
  {
    width: 50,
    height: 50,
    color: "black",
  },
  {
    width: 80,
    height: 80,
    color: "blue",
  },
  {
    width: 10,
    height: 50,
    color: "red",
  },
  {
    width: 60,
    height: 50,
    color: "grey",
  },
  {
    width: 50,
    height: 150,
    color: "white",
  },
];

const hasColor = (color) => (figure) => figure.color === color;

const isRed = hasColor("red");
const isBlue = hasColor("blue");

function reduce(cb, arr, startValue) {
  let result = startValue;
  arr.forEach((element) => {
    result = cb(result, element);
  });

  return result;
}

function map(cb, arr) {
  const result = [];
  arr.forEach((element) => {
    result.push(cb(element));
  });

  return result;
}

function filter(cb, arr) {
  const result = [];
  arr.forEach((element) => {
    if (cb(element)) {
      result.push(element);
    }
  });

  return result;
}

function flow(startValue, ...funcs) {
  return funcs.reduce((res, func) => {
    return func(res);
  }, startValue);
}

const add1 = (x) => x + 1;
const add5 = (x) => x + 5;
const add10 = (x) => x + 10;

console.log(flow(10, add1, add10, add5, add10));

const and = (f1, f2) => (x) => f1(x) && f2(x);
const or = (f1, f2) => (x) => f1(x) || f2(x);
