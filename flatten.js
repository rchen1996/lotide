const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // [1, 2, 3, 4, 5, 6]