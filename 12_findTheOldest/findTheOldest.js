const findTheOldest = function (people) {
  const currentDate = new Date();
  const highest = people.reduce(
    (highest, e) => {
      const birth = e.yearOfBirth;
      let death = null;
      if (e.yearOfDeath) {
        death = e.yearOfDeath;
      } else {
        death = currentDate.getFullYear();
      }
      const years = death - birth;
      e.years = years;
      if (e.years > highest.years) {
        return e;
      }
      return highest;
    },
    { years: 0 }
  );

  return highest;
};

// Do not edit below this line
module.exports = findTheOldest;
