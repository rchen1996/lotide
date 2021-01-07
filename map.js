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

// map function takes 2 arguments: array to map, callback function
// function returns new array based on results of callback function

const map = function(array, callback) {
  // start with empty array to return
  const results = [];
  for (let item of array) { // loop through array
    results.push(callback(item)); // push to new array at each element with the element altered by the callback function
  }

  return results;
};


// Test Case
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word + "s");
assertArraysEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);

const numbs = [1, 2, 3, 4, 5];
const results3 = map(numbs, numb => numb + 1);
assertArraysEqual(results3, [2, 3, 4, 5, 6]);