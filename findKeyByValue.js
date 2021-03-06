// takes in an object and a value
// scan object and return the first key which contains the given value
// if no key with given value is found, return undefined
const findKeyByValue = function(obj, value) {
  // need to loop through the obj and look at the values
  // check if the value of each key is the same as input value
  // need to loop through the keys of the object - done by creating an array of keys using Object.keys()
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  // if the key doesn't exist, then nothing will be returned from the loop
  // need a catch all
  return undefined;
};

module.exports = findKeyByValue;