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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// takes in 2 arrays and console.log a message
// message will be similar to assertEqual


const assertArraysEqual = function(arr1, arr2) {
  // let comparison;
  // need to check if arrays are the same length
  // if (arr1.length !== arr2.length) {
  //   comparison = false;
  // } else {
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) {
  //       comparison = false;
  //       i = arr1.length - 1;
  //     } else {
  //       comparison = true;
  //     }
  //   }
  // }
  // if (comparison === false) {
  //   console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  // } else {
  //   console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  // }
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should be true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should be false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should be true
assertArraysEqual(["1", "2", "3"], [1, "2", "3"]); // should be false
assertArraysEqual([1, 2, 3], [1]); // should be false
assertArraysEqual([1], [1, 2]); // should be false