/*
Recursion is when a function calls itselfs over again until a condition is met 
*/

let countdown = (num) => {
  if (num === 0) return;
  console.log(num);
  countdown(num - 1);
};

countdown(10);

// QUIZ CHALLENGES ON RECURSION FROM CURSOR

// BEGINNER

//1. Print each character of a string in reverse
// reverseString("hello") should log: "o", "l", "l", "e", "h"

function reverseString(string) {
  if (string.length === 0) return;
  let reversedString = [];

  reversedString = string.slice(0, -1);
  console.log(string[string.length - 1]);
  reverseString(reversedString);
}

// INTERMEDIATE

//1. Implement binary search recursively
// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
// binarySearch(sortedArray, 7) should return 3 (index)

function binarySearch(array, target) {
  let index = Math.floor(array.length / 2);
  if (array.length === 0) return -1;

  if (array[index] === target) {
    console.log(index);
    return index;
  }

  if (array[index] > target) {
    console.log(index);
    array = array.slice(0, index);
  } else {
    console.log(index);
    array = array.slice(index + 1);
  }

  const result = binarySearch(array, target);
  return result + (array[index] < target ? 1 : 0);
}

// ADVANCED

//1. Generate all permutations of a string
// getPermutations("abc") should return ["abc", "acb", "bac", "bca", "cab", "cba"]

function getPermutations(string) {
  console.log(string);
}

// EXPERT

//1. Implement a basic JSON parser
// parse('{"name": "John", "age": 30}') should return object

function parse(string) {
  console.log(string);
}
