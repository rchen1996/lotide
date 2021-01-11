const eqObjects = require('./eqObjects');

// takes in 2 objects
// prints appropriate message to the console
const assertObjectsEqual = function(actual, expected) {
  // import util library's inspect function - want a more descriptive message when printing the object instead of [object Object]
  const inspect = require('util').inspect;
  // need a variable to let us know what the bool return is
  let objMatch = eqObjects(actual, expected); // return a bool value
  if (objMatch) {
    // using inspect(obj) so that we get more detailed output - will print the actual obj instead of [object Object]
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// // test cases
// const myCats = {
//   hosico: "fluffy",
//   nino: "fluffier",
//   kitty: "kitten"
// };

// const thomasCats = {
//   hosico: "fluffy",
//   kitty: "kitten",
//   nino: "fluffier"
// };

// assertObjectsEqual(myCats, thomasCats); // should pass

// const noCats = {
//   dog: "purple"
// };

// assertObjectsEqual(myCats, noCats); // should fail

module.exports = assertObjectsEqual;
