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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// function that takes in an array containing elements
// including nested arrays of elements
// return a "flattened" version of the array
// only needs to handle one level of nesting
// can use recursion to handle infinite nesting
// use Array.isArray() to check if array
const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattened.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // [1, 2, 3, 4, 5, 6]