const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 3);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Cat", "Dog"]), "Purple");