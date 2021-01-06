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

// return all the indices (zero-based positions) in the string where each character is found
// multiple numbers may be needed to represent all the places
const letterPositions = function(sentence) {
  // need an empty obj to return
  const results = {};
  // logic to update results
  return results;
};

// Test Code
const results1 = letterPositions("hello"); // obj
assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["o"], [4]);