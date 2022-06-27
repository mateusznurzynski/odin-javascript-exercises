const removeFromArray = function (array, ...removedValues) {
  const output = array;
  removedValues.forEach((value) => {
    if (output.includes(value)) {
      const dataIndex = output.indexOf(value);
      output.splice(dataIndex, 1);
    }
  });
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
