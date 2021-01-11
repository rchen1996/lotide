// return all the indices (zero-based positions) in the string where each character is found
// multiple numbers may be needed to represent all the places
const letterPositions = function(sentence) {
  // need an empty obj to return
  const results = {};
  // need to loop the string
  for (let i = 0; i < sentence.length; i++) {
    // check if the property already exists
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = []; // if doesn't exist, create an array to store the index
      // then push the index
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;