const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function takes in 2 objects
// returns true or false based on a perfect match
const eqObjects = function(obj1, obj2) {
  // need a variable to check
  let match;
  // objects need to have the same number of keys
  let obj1Keys = Object.keys(obj1); // array of keys for obj1
  let obj2Keys = Object.keys(obj2); // array of keys for obj2
  if (obj1Keys.length !== obj2Keys.length) {
    // if not same number of keys, auto fails
    match = false;
    return match;
  } else { // value for each key has to be the same for both objects
    for (const key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
        match = false;
        return match;
      } else {
        match = true;
      }
    }
  }
  // catch all for when match = true;
  return match;
};

// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // should pass

const abc = {a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // should pass