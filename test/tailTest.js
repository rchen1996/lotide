const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test case: Check the original array to make sure it hasn't been modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
const resultWords = tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements
assertEqual(resultWords[1], "Labs");

// Test case: array with 1 element
const one = [3];
console.log(tail(one));

//Test case: empty array
const empty = [];
console.log(tail(empty));