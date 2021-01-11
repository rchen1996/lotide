// function should not modify array that is passed in
// should return a new array
const tail = function(arr) {
  let arrTails = [];
  for (let i = 1; i < arr.length; i++) {
    arrTails.push(arr[i]);
  }
  return arrTails;
};

module.exports = tail;