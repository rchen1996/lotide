const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

// function takes in 2 objects
// returns true or false based on a perfect match
const eqObjects = function(obj1, obj2) {
  let match;
  // objects need to have the same number of keys
  let obj1Keys = Object.keys(obj1); // array of keys for obj1
  let obj2Keys = Object.keys(obj2); // array of keys for obj2
  if (obj1Keys.length !== obj2Keys.length) {
    // if not same number of keys, auto fails
    return false;
  } else { // value for each key has to be the same for both objects
    for (const key of obj1Keys) {
      // need to check if the value of the key is an array
      // need to check that both values at specified key in both objects are arrays
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        match = eqArrays(obj1[key], obj2[key]); // compare the 2 arrays to see if they are the same
        // match is set to true if they are the same and false if not
        if (!match) {
          return false;
        }
      } else if (Array.isArray(obj1[key]) && !Array.isArray(obj2[key]) || !Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        // checks if values at specified key are both arrays
        // if not both arrays, then will auto fail
        return false;
      } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        // checks if the value of the key is an obj for both objects
        return eqObjects(obj1[key], obj2[key]);
      } else if (typeof obj1[key] === "object" && typeof obj2[key] !== "object" || typeof obj1[key] !== "object" && typeof obj2[key] === "object") {
        // checks to make sure the values of both obj at given key are objects
        // if not objects, then auto fails
        return false;
      } else if (obj1[key] !== obj2[key]) {
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
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // should pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // should pass

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // should pass

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // should pass

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // should pass

const nestedObj = {
  a: {
    b: {
      c: {
        d: {
          e: 5
        }
      }
    }
  }
};

const nestedObj2 = {
  a: {
    b: {
      c: {
        d: {
          e: 5
        }
      }
    }
  }
};

const nestedObj3 = {
  a: {
    b: {
      d: {
        c: {
          e: 5
        }
      }
    }
  }
};

assertEqual(eqObjects(nestedObj, nestedObj2), true); // should pass

assertEqual(eqObjects(nestedObj, nestedObj3), false); // should pass