const { assert } = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {
  it('should return "noma" for value of stars === 2', () => {
    const starsName = {
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Ora": {stars: 2},
      "Akelarre": {stars: 3}
    };
    let result1 = findKey(starsName, x => x.stars === 2);
    assert.strictEqual(result1, "noma");
  });

  it('should return undefined for value of stars === 4', () => {
    const starsName = {
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Ora": {stars: 2},
      "Akelarre": {stars: 3}
    };
    let result3 = findKey(starsName, x => x.stars > 4);
    assert.strictEqual(result3, undefined);
  });

  it('should return "Akaleri" for stars === 3', () => {
    const starsName = {
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Ora": {stars: 2},
      "Akelarre": {stars: 3}
    };
    let result4 = findKey(starsName, x => x.stars === 3);
    assert.strictEqual(result4, "Akaleri");
  });

  it('should return "hosico" for x === "fluffy"', () => {
    const catAttributes = {
      hosico: "fluffy" ,
      nino: "orange",
      sakura: "fluffy"
    };
    let result2 = findKey(catAttributes, x => x === "fluffy");
    assert.strictEqual(result2, "hosico");
  });
});