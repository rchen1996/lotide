const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it('should return 3 for the length of the original array ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });

  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const resultWords = tail(words);
    assert.deepStrictEqual(resultWords, ["Lighthouse", "Labs"]);
  });

  it('should return [] for [3]', () => {
    const one = [3];
    const result = tail(one);
    assert.deepStrictEqual(result, []);
  });

  it('should return [] for []', () => {
    const empty = [];
    const result = tail(empty);
    assert.deepStrictEqual(result, []);
  });
});