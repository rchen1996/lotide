// map function takes 2 arguments: array to map, callback function
// function returns new array based on results of callback function

const map = function(array, callback) {
  // start with empty array to return
  const results = [];
  for (let item of array) { // loop through array
    results.push(callback(item)); // push to new array at each element with the element altered by the callback function
  }
  return results;
};

module.exports = map;