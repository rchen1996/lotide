const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// given an array and an object
// returns an object containing counts of everything that the input object listed
// only keys that have a truthy value should be counted
// all other strings should not be counted
// if a string is meant to be counted but does not exist in the input arr, does not have to be counted
// allItems: an array of strings need to look through
// itemsToCount: obj specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // need to create a new obj to be returned
  // obj should say how many instances of each string were found in the array
  const results = {};
  // need to loop over the allItems array - determine how many of each exists
  // then increment the count into results obj as we encounter them
  for (const item of allItems) {
    // first need to check if the property already exists AND it needs to be counted
    if (results[item] && itemsToCount[item]) {
      results[item] += 1;
    } else if (itemsToCount[item]) {
      results[item] = 1; // if property doesn't exist but needs to be counted, need to start count
    }
  }
  return results;
};

// Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);