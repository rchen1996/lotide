const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(["1"]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, "2", "3", 3]), ["2", "3"]);