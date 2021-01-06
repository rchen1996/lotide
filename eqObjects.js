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
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    // if not same number of keys, auto fails
    match = false;
    return match;
  }
  // value for each key has to be the same for both objects
};

// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // should return true
assertEqual(eqObjects(ab, ba), ab); // should fail

const abc = {a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // should return false
assertEqual(eqObjects(ab, abc), ab); // should fail