const assertArraysEqual = require('./assertArraysEqual');

// function takes in 2 parameters: array, callback
// function returns a slice of the array with elements taken from the beginning
// keep going until the callback returns a truthy value
// callback should only be provided the item in the array
// once it takes in a truthy value, the loop should stop
const takeUntil = function(array, callback) {
  // need it to return an array
  let result = [];
  for (let item of array) { // loop through the array
    if (callback(item)) {
      break; // breaks out of the loop once truthy
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

// Test cases
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const results1 = takeUntil(numbers, number => number > 5);
// assertArraysEqual(results1, [1, 2, 3, 4, 5]);

// const words = ["hello", "my", "name", "is", "Rebecca"];
// const results2 = takeUntil(words, word => word === "is");
// assertArraysEqual(results2, ["hello", "my", "name"]);

// const mixed = [1, 2, 3, "one", "two", "three"];
// const results3 = takeUntil(mixed, x => typeof x === "string");
// assertArraysEqual(results3, [1, 2, 3]);