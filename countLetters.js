const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// takes in a string and returns a count of each letter in the sentence
// don't need to count spaces
const countLetters = function(str) {
  // need an empty obj to return later
  const lettersCounted = {};
  // need to loop through the string
  // need to add to a count at each letter
  // if property doesn't exist, need to create the count for it first before adding
  return lettersCounted;
};