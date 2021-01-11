const { assert } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return a spliced array of the beginning of the original where the elements are < 5', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results1 = takeUntil(numbers, number => number > 5);
    assert.deepStrictEqual(results1, [1, 2, 3, 4, 5]);
  });

  it('should return a spliced array of the beginning of the original where the elements come before "is"', () => {
    const words = ["hello", "my", "name", "is", "Rebecca"];
    const results2 = takeUntil(words, word => word === "is");
    assert.deepStrictEqual(results2, ["hello", "my", "name"]);
  });

  it('should return a spliced array of the beginning elements of the original up until the first string element', () => {
    const mixed = [1, 2, 3, "one", "two", "three"];
    const results3 = takeUntil(mixed, x => typeof x === "string");
    assert.deepStrictEqual(results3, [1, 2, 3]);
  });
});