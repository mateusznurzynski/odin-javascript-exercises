const add = function (a, b) {
  const output = a + b;
  return output;
};

const subtract = function (a, b) {
  const output = a - b;
  return output;
};

const sum = function (numbers) {
  const output = numbers.reduce((sum, e) => {
    sum += e;
    return sum;
  }, 0);
  return output;
};

const multiply = function (numbers) {
  const output = numbers.reduce((current, e) => {
    current *= e;
    return current;
  }, 1);
  return output;
};

const power = function (number, power) {
  const output = number ** power;
  return output;
};

const factorial = function (number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
