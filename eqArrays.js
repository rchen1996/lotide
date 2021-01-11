// function takes in 2 arrays and returns true/false based on perfect match
const eqArrays = function(arr1, arr2) {
  let comparison;
  // need to check if arrays are the same length
  if (arr1.length !== arr2.length) {
    // if not same length; auto fails
    comparison = false;
    return comparison;
  } else {
    if (arr1.length === 0) {
      // if arrays are same length, and length is 0, meaning empty arr
      comparison = true;
      return comparison;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          // checks if at each index value, if there is a nested arr
          // if there is a nested arr, then recurse
          comparison = eqArrays(arr1[i], arr2[i]);
        } else if (Array.isArray(arr1[i]) && !Array.isArray(arr2[i]) || !Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          // checks to see if both values are nested arrays
          // if one is a nested arr and the other isn't, then auto fail
          comparison = false;
        } else if (arr1[i] === arr2[i]) {
          // if the values at each index are not the same, then arrays are different
          comparison = true;
        } else {
          comparison = false;
          return comparison;
        }
      }
    }
  }
  // if it passes previous tests, then it must be true
  return comparison;
};

module.exports = eqArrays;