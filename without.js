// returns a subset of a given array, removing unwanted elements
// takes in a source arr and an itemsToRemove arr
// returns a new arr with only elements from source not present in itemsToRemove
const without = function(source, itemsToRemove) {
  // need a new arr for the elements
  let subset = [];
  // need something to determine which elements get pushed to new arr
  let test;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        test = true;
        j = itemsToRemove.length - 1;
      } else {
        test = false;
      }
    }
    if (test === false) {
      subset.push(source[i]);
    }
  }
  return subset;
};

module.exports = without;