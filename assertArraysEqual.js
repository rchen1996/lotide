const eqArrays = function(arr1, arr2) {
  let comparison;
  // need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    // if not same length; auto fails
    comparison = false;
    return comparison;
  } else {
    if (arr1.length === 0) {
      // if arrays are same length, and length is 0, meaning empty arr
      comparison = true;
      return comparison;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          // checks if at each index value, if there is a nested arr
          // if there is a nested arr, then recurse
          comparison = eqArrays(arr1[i], arr2[i]);
        } else if (Array.isArray(arr1[i]) && !Array.isArray(arr2[i]) || !Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          // checks to see if both values are nested arrays
          // if one is a nested arr and the other isn't, then auto fail
          comparison = false;
        } else if (arr1[i] === arr2[i]) {
          // if the values at each index are not the same, then arrays are different
          comparison = true;
        } else {
          comparison = false;
          return comparison;
        }
      }
    }
  }
  // if it passes previous tests, then it must be true
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
assertArraysEqual([], []); // should be true