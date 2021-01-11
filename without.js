const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = without;

// // Test Cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([2, 3, 4, 5, 6, 7,], [7, 5, 4, 3, 2]), [6]);
// assertArraysEqual(without([1, "cat", 3, "dog", 1, 1], [1, "dog", 2]), ["cat", 3])

// // Need to make sure without is returning a new array and not modifying original
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // checking that original is still the same after calling function