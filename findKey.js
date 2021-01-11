// function takes in an object and a callback
// scans the object and returns the first key for which the callback returns truthy
// if no key found, return undefined
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  // if no key found
  return undefined;
};

module.exports = findKey;