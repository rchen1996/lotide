const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function takes in an object and a callback
// scans the object and returns the first key for which the callback returns truthy
// if no key found, return undefined
const findKey = function(obj, callback) {
  let objKeys = Object.keys(obj); // array of keys for the object
  for (let key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  // if no key found
  return undefined;
};

// Test Case
let result1 = findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2) // "noma"
assertEqual(result1, "noma");

const catAttributes = {
  hosico: "fluffy",
  nino: "orange",
  sakura: "fluffy"
};
let result2 = findKey(catAttributes, x => )