const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return [0] for "h"', () => {
    const results1 = letterPositions("hello");
    assert.deepPropertyVal(results1, "h", [0]);
  });

  it('should return [1] for "e"', () => {
    const results1 = letterPositions("hello");
    assert.deepPropertyVal(results1, "e", [1]);
  });

  it('should return [2, 3] for "l"', () => {
    const results1 = letterPositions("hello");
    assert.deepPropertyVal(results1, "l", [2, 3]);
  });

  it('should return [4] for "o"', () => {
    const results1 = letterPositions("hello");
    assert.deepPropertyVal(results1, "o", [4]);
  });
});