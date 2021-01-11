const { assert } = require('chai');
const without = require('../without');

describe('#without', () => {
  it('should return [2, 3] for [1, 2, 3] without [1]', () => {
    let result = without([1, 2, 3], [1]);
    assert.deepStrictEqual(result, [2, 3]);
  });

  it('should return ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]', () => {
    let result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepStrictEqual(result, ["1", "2"]);
  });

  it('should return [6] for [2, 3, 4, 5, 6, 7] without [7, 5, 4, 3, 2]', () => {
    const result = without([2, 3, 4, 5, 6, 7,], [7, 5, 4, 3, 2]);
    assert.deepStrictEqual(result, [6]);
  });

  it('should return ["cat", 3] for [1, "cat", 3, "dog", 1, 1] without [1, "dog", 2]', () => {
    const result = without([1, "cat", 3, "dog", 1, 1], [1, "dog", 2]);
    assert.deepStrictEqual(result, ["cat", 3]);
  });

  it('should not modify the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepStrictEqual(words, ["hello", "world", "lighthouse"]);
  });
});