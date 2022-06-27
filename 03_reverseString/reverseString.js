const reverseString = function (string) {
  const stringArray = Array.from(string);
  const reversedArray = stringArray.reverse();
  const output = reversedArray.join('');
  return output;
};

// Do not edit below this line
module.exports = reverseString;
