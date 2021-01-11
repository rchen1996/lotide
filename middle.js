// takes an array and return the middle-most elements
const middle = function(arr) {
  // need a new array to store the middle value(s)
  let mid = [];
  // to check even or odd
  let divisibleBy2 = arr.length % 2;
  // need a variable that stores the index of the middle
  let midIndex;
  // arrays with 1 or 2 elements return empty array (no middle)
  if (arr.length < 3) {
    return mid;
  } else if (divisibleBy2 !== 0) {
    // arrays with odd number of elements, return middle value
    // first need to find the middle index
    midIndex = Math.floor(arr.length / 2);
    // then push the value to the new arr;
    mid.push(arr[midIndex]);
    return mid;
  } else if (divisibleBy2 === 0) {
    // arrays with even number of elements, return middle 2 values
    // first need to find the "middle"
    // number returned is actually the 2nd middle index
    midIndex = arr.length / 2;
    mid.push(arr[midIndex - 1], arr[midIndex]);
    return mid;
  }
};

module.exports = middle;