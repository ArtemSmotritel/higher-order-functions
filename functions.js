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

function map(params) {}

function filter(params) {}

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
