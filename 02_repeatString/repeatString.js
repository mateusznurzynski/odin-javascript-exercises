const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let requestedString = '';
  for (let i = 0; i < num; i++) {
    requestedString += string;
  }
  return requestedString;
};

// Do not edit below this line
module.exports = repeatString;
