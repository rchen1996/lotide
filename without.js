const eqArrays = function(arr1, arr2) {
  // need to keep track of whether or not the two are the same
  let comparison;
  // need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    comparison = false;
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
  return comparison;
};

const assertArraysEqual = function(arr1, arr2) {
  let comparison;
  // need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    comparison = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        comparison = false;
        i = arr1.length - 1;
      } else {
        comparison = true;
      }
    }
  }
  if (comparison === false) {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};

// returns a subset of a given array, removing unwanted elements
// takes in a source arr and an itemsToRemove arr
// returns a new arr with only elements from source not present in itemsToRemove
const without = function(source, itemsToRemove) {
  // need a new arr for the elements
  let subset = [];
  // need something to determine which elements get pushed to new arr
  let test;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        test = true;
        j = itemsToRemove.length - 1;
      } else {
        test = false;
      }
    }
    if (test === false) {
      subset.push(source[i]);
    }
  }
  return subset;
};

// Test Cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([2, 3, 4, 5, 6, 7,], [7, 5, 4, 3, 2]), [6]);

// Need to make sure without is returning a new array and not modifying original
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // checking that original is still the same after calling function