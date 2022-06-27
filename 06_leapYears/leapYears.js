const leapYears = function (year) {
  let leapYear = false;
  if (year % 100 === 0) {
    leapYear = year % 400 === 0 ? true : false;
  } else {
    leapYear = year % 4 === 0 ? true : false;
  }
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
