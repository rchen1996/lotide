const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return "drama" for "The Wire"', () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });

  it('should return undefined for "That \'70s Show', () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(result, undefined);
  });

  it('should return "hosico" for "fluffy"', () => {
    const catAttributes = {
      hosico: "fluffy",
      nino: "orange",
      sakura: "fluffy"
    };
    const result = findKeyByValue(catAttributes, "fluffy");
    assert.strictEqual(result, "hosico");
  });

  it('should return undefined for "purple"', () => {
    const catAttributes = {
      hosico: "fluffy",
      nino: "orange",
      sakura: "fluffy"
    };
    const result = findKeyByValue(catAttributes, "purple");
    assert.strictEqual(result, undefined);
  });
});