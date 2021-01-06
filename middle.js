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

// takes an array and return the middle-most elements
const middle = function(arr) {
  // need a new array to store the middle value(s)
  let mid = [];
  // to check even or odd
  let divisibleBy2 = arr.length % 2
  // need a variable that stores the index of the middle
  let midIndex;
  // arrays with 1 or 2 elements return empty array (no middle)
  if (arr.length < 3) {
    return mid;
  } else if (divisibleBy2 !== 0) {
    // arrays with odd number of elements, return middle value
    // first need to find the middle index
    midIndex = Math.floor(arr.length / 2);
    // then push the value to the new arr;
    mid.push(arr[midIndex]);
    return mid;
  } else if (divisibleBy2 === 0) {
    // arrays with even number of elements, return middle 2 values
    // first need to find the "middle"
    // number returned is actually the 2nd middle index
    midIndex = arr.length / 2;
    mid.push(arr[midIndex - 1], arr[midIndex]);
    return mid;
  }
};

// Test Code
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(["1"]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, "2", "3", 3]), ["2", "3"]);