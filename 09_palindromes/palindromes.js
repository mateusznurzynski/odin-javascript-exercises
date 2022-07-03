const palindromes = function (string) {
  string = string.toLowerCase();
  const invalidCharacters = ['!', ' ', ',', '.'];
  const clearString = Array.from(string).filter((e) => {
    if (!invalidCharacters.includes(e)) {
      return e;
    }
  });
  const reversedArray = [...clearString].reverse();
  let index = 0;
  if (
    clearString.every((e) => {
      if (e === reversedArray[index]) {
        index++;
        return true;
      }
    })
  ) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
