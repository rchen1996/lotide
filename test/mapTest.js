const { assert } = require('chai');
const map = require('../map');

describe('#map', () => {
  it('should return a new array of only the first letter of each element in the original array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepStrictEqual(results1, ["g", "c", "t", "m", "t"]);
  });

  it('should return the elements of the original array with an "s" concatenated to the end of each word', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results2 = map(words, word => word + "s");
    assert.deepStrictEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);
  });

  it('should return the numbers in the array +1 at every element', () => {
    const numbs = [1, 2, 3, 4, 5];
    const results3 = map(numbs, numb => numb + 1);
    assert.deepStrictEqual(results3, [2, 3, 4, 5, 6]);
  });
});