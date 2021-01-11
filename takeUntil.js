// function takes in 2 parameters: array, callback
// function returns a slice of the array with elements taken from the beginning
// keep going until the callback returns a truthy value
// callback should only be provided the item in the array
// once it takes in a truthy value, the loop should stop
const takeUntil = function(array, callback) {
  // need it to return an array
  let result = [];
  for (let item of array) { // loop through the array
    if (callback(item)) {
      break; // breaks out of the loop once truthy
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;