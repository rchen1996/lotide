# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rchen1996/lotide`

**Require it:**

`const _ = require('@rchen1996/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: takes in two arrays and logs a an appropriate message to the console based on whether the arrays are a perfect match.
* `assertEqual(actual, expected)`: compares two values and prints out a message for whether the assertion passed or failed
* `assertObjectsEqual(obj1, obj2)`: takes in two objects and will print an appropriate assertion message to the console after comparing the objects for a perfect match
* `countLetters(str)`: takes in a string and returns a count of each of the letters in the string.
* `countOnly(allItemsArr, itemsToCountObj)`: takes in an array of strings and an object that contains boolean values for certain strings. The function will return an object that contains counts of everything that the input object listed.
* `eqArrays(array1, array2)`: takes in two arrays and compares the arrays. It will return true or false based on a perfect match.
* `eqObjects(obj1, obj2)`: takes in two objects and returns true or false after comparing the objects for a perfect match.
* `findKey(obj, callback)`: takes in an object and a callback function. findKey will scan the array and return the first key in the object for which the callback function returns a truthy value. If no key is found, undefined will be returned.
* `findKeyByValue(Obj, value)`: takes in an object and a value, and scans the object and returns the first key which contains the given value. If no key with the given value is found, then undefined is returned.
* `flatten(array)`: takes in an array containing elements, including nested arrays, and returns a "flattened" version of the array
* `head(array)`: retrieves the first element from the array
* `letterPositions(sentence)`: returns an object of all the indices in the input string where each character is found
* `map(array, callback)`: takes in an array to map and a callback function. The callback function should aim to alter each element in the array. The map function will return a new array based on the results of the callback function. 
* `middle(array)`: returns the middle-most element(s) of the given array
* `tail(array)`: returns every element except the head (first element) of the array as a new array
* `takeUntil(array, callback)`: function will take in an array and a callback function. takeUntil will return a slice of the original array with elements taken from the beginning until the callback function returns a truthy value.
* `without(sourceArr, itemsToRemoveArr)`: returns a subset of a given array, removing unwanted elements