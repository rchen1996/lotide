const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// takes in an object and a value
// scan object and return the first key which contains the given value
// if no key with given value is found, return undefined
const findKeyByValue = function(obj, value) {

};

// Test Cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const catAttributes = {
  hosico: "fluffy",
  nino: "orange",
  sakura: "fluffy"
};

assertEqual(findKeyByValue(catAttributes, "fluffy"), "hosico");
assertEqual(findKeyByValue(catAttributes, "purple"), undefined);