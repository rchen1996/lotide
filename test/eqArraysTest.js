const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([1], [1, 2]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

const nested1 = [[[[[[1, [2]]]]]]];
const nested2 = [[[[[[1, [2]]]]]]];
const nested3 = [[[[[[[[[3, [4, [5]]]]]]]]]]];

assertEqual(eqArrays(nested1, nested2), true);
assertEqual(eqArrays(nested1, nested3), false);