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
    return funcs.reduce((res, func) => func(res), startValue);
  };
}

function combine(...funcs) {
  return function (startValue) {
    return funcs.reduceRight((res, func) => func(res), startValue);
  }
}

const and = (f1, f2) => x => f1(x) && f2(x);
const or = (f1, f2) => x => f1(x) || f2(x);
const addC = p1 => p2 => p2 && p1;
const orC = p1 => p2 => p2 || p1;

const all = (...predicates) => predicates.reduce(and);
const any = (...predicates) => predicates.reduce(or);

module.exports = { flow, hasColor, map, filter, reduce };
