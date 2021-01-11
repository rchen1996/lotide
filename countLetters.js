const assertEqual = require('./assertEqual');

// takes in a string and returns a count of each letter in the sentence
// don't need to count spaces
const countLetters = function(str) {
  // need an empty obj to return later
  const lettersCounted = {};
  // need to loop through the string
  // need to add to a count at each letter
  // if property doesn't exist, need to create the count for it first before adding
  for (const letter of str) {
    // check if the property already exists
    if (lettersCounted[letter]) {
      lettersCounted[letter] += 1;
    } else {
      lettersCounted[letter] = 1;
    }
  }
  return lettersCounted;
};

// // Test Cases
// const result1 = countLetters("lighthouse in the house");
// assertEqual(result1["l"], 1);
// assertEqual(result1["o"], 2);
// assertEqual(result1["h"], 4);

module.exports = countLetters;