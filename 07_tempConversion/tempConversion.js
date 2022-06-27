const ftoc = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let stringCelsius = celsius + '';
  const output = stringCelsius.includes('.') ? celsius.toFixed(1) : celsius;
  return +output;
};

const ctof = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let stringFahrenheit = fahrenheit + '';
  const output = stringFahrenheit.includes('.')
    ? fahrenheit.toFixed(1)
    : fahrenheit;
  return +output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
