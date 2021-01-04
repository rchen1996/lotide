const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function should not modify array that is passed in
// should return a new array
const tails = function(arr) {
  let arrTails = [];
  for (let i = 1; i < arr.length; i++) {
    arrTails.push(arr[i]);
  }
  return arrTails;
};

// Test case: Check the original array to make sure it hasn't been modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
const resultWords = tails(words);
assertEqual(words.length, 3); // original array should still have 3 elements
assertEqual(resultWords[1], "Labs");

// Test case: array with 1 element
const one = [3];
console.log(tails(one));

//Test case: empty array
const empty = [];
console.log(tails(empty));
