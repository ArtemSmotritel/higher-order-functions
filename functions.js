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
];

const hasColor = (color) => (figure) => figure.color === color;

function reduce(cb, startValue) {
  return function (arr) {
    let result = startValue;
    arr.forEach((element) => {
      result = cb(result, element);
    });
    return result;
  };
}

function map(cb) {
  return function (arr) {
    const result = [];
    arr.forEach((element) => {
      result.push(cb(element));
    });
    return result;
  };
}

function filter(cb) {
  return function (arr) {
    const result = [];
    arr.forEach((element) => {
      if (cb(element)) {
        result.push(element);
      }
    });
    return result;
  };
}

function flow(...funcs) {
  return function (startValue) {
    return funcs.reduce((res, func) => {
      return func(res);
    }, startValue);
  };
}

const and = (f1, f2) => (x) => f1(x) && f2(x);
const or = (f1, f2) => (x) => f1(x) || f2(x);

module.exports = { flow, hasColor, map, filter, reduce, figures };
