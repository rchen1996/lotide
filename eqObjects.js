const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

// function takes in 2 objects
// returns true or false based on a perfect match
const eqObjects = function(obj1, obj2) {
  // objects need to have the same number of keys
  let obj1Keys = Object.keys(obj1); // array of keys for obj1
  let obj2Keys = Object.keys(obj2); // array of keys for obj2
  if (obj1Keys.length !== obj2Keys.length) {
    // if not same number of keys, auto fails
    return false;
  } else { // value for each key has to be the same for both objects
    for (const key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    // if all key-value pairs of the same, false is never returned
    // so they must all be the same, return true at end of loop
    return true;
  }
};

// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // should pass

const abc = {a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // should pass

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true); // should pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // should pass