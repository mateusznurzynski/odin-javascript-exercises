const getTheTitles = function (bookObj) {
  const output = [];
  bookObj.forEach((e) => {
    output.push(e.title);
  });
  return output;
};

// Do not edit below this line
module.exports = getTheTitles;
