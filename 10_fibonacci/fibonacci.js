const fibonacci = function (total) {
  total = +total;
  if (total <= 0) {
    return 'OOPS';
  }

  let previousNumber = 1;
  let currentNumber = 1;

  const finalArray = [previousNumber, currentNumber];
  if (finalArray.length >= total) {
    return finalArray[total - 1];
  }
  while (finalArray.length !== total) {
    const newCurrentNumber = previousNumber + currentNumber;
    const newPreviousNumber = currentNumber;
    finalArray.push(newCurrentNumber);
    previousNumber = newPreviousNumber;
    currentNumber = newCurrentNumber;
  }
  return finalArray[total - 1];
};

// Do not edit below this line
module.exports = fibonacci;
