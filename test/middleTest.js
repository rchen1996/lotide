const { assert } = require('chai');
const middle = require('../middle');

describe('#middle', () => {
  it('should return [] for [1, 2]', () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });

  it('should return [] for ["1"]', () => {
    assert.deepStrictEqual(middle(["1"]), []);
  });

  it('should return [2] for [1, 2, 3]', () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });

  it('should return ["2", "3"] for [1, "2", "3", 3]', () => {
    assert.deepStrictEqual(middle([1, "2", "3", 3]), ["2", "3"]);
  });
});