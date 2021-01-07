const eqArrays = function(arr1, arr2) {
  // need to keep track of whether or not the two are the same
  let comparison;
  // need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    comparison = false;
    return comparison;
  } else {
    if (arr1.length === 0) {
      comparison = true;
      return comparison;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          comparison = true;
        } else {
          comparison = false;
          return comparison;
        }
      }
    }
  }
  return comparison;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// function takes in 2 parameters: array, callback
// function returns a slice of the array with elements taken from the beginning
// keep going until the callback returns a truthy value
// callback should only be provided the item in the array
// once it takes in a truthy value, the loop should stop
const takeUntil = function(array, callback) {

};

// Test cases
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results1 = takeUntil(numbers, number => number > 5);
assertArraysEqual(results1, [1, 2, 3, 4, 5]);

const words = ["hello", "my", "name", "is", "Rebecca"];
const results2 = takeUntil(words, word => word === "is");
assertArraysEqual(results2, ["hello", "my", "name"]);

const mixed = [1, 2, 3, "one", "two", "three"];
const results3 = takeUntil(mixed, x => typeof x === "string");
assertArraysEqual(results3, [1, 2, 3]);