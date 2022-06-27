const sumAll = function (num1, num2) {
  if (
    typeof num1 != 'number' ||
    typeof num2 != 'number' ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return 'ERROR';
  }
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }
  const largerNumber = num1 > num2 ? num1 : num2;
  const smallerNumber = largerNumber === num1 ? num2 : num1;

  let sum = 0;
  let currentNumber = smallerNumber;
  for (let i = 0; i < largerNumber - smallerNumber + 1; i++) {
    sum += currentNumber;
    currentNumber++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
