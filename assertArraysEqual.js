const eqArrays = require('./eqArrays');

// takes in 2 arrays and console.log a message
// message will be similar to assertEqual

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;