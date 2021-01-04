const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function returns first item in the array
// use assertEqual to write test cases
const head = function(arr) {
  return arr[0];
};

/* Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 3);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Cat", "Dog"]), "Purple");
*/