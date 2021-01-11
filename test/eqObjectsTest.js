const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for ab and ba being a match', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = eqObjects(ab, ba);
    assert.isTrue(result);
  });

  it('should return false for abc and ab being a match', () => {
    const ab = { a: "1", b: "2" };
    const abc = {a: "1", b: "2", c: "3" };
    const result = eqObjects(ab, abc);
    assert.isFalse(result);
  });

  it('should return true for cd and dc being a match', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const result = eqObjects(cd, dc);
    assert.isTrue(result);
  });

  it('should return false for cd2 and cd being a match', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const result = eqObjects(cd, cd2);
    assert.isFalse(result);
  });

  it('should return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } being a match', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } being a match', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

  it('should return true for nestedObj and nestedObj2 being a match', () => {
    const nestedObj = {
      a: {
        b: {
          c: {
            d: {
              e: 5
            }
          }
        }
      }
    };
    const nestedObj2 = {
      a: {
        b: {
          c: {
            d: {
              e: 5
            }
          }
        }
      }
    };
    const result = eqObjects(nestedObj, nestedObj2);
    assert.isTrue(result);
  });

  it('should return false for nestedObj and nestedObj3 being a match', () => {
    const nestedObj = {
      a: {
        b: {
          c: {
            d: {
              e: 5
            }
          }
        }
      }
    };
    const nestedObj3 = {
      a: {
        b: {
          d: {
            c: {
              e: 5
            }
          }
        }
      }
    };
    const result = eqObjects(nestedObj, nestedObj3);
    assert.isFalse(result);
  });
});