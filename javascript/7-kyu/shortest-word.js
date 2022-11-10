/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// Original answer:

function findShort(s) {
  const arrayWords = s.split(" ");
  let shortestLength = 1000;
  for (let i = 0; i < arrayWords.length; i++) {
    if (shortestLength > arrayWords[i].length) {
      shortestLength = arrayWords[i].length;
    }
  }
  return shortestLength;
}

// Better answer

function findShort(s) {
  const arrayWords = s.split(" ");
  let shortestLength = arrayWords[0];
  for (let i = 1; i < arrayWords.length; i++) {
    if (shortestLength > arrayWords[i].length) {
      shortestLength = arrayWords[i].length;
    }
  }
  return shortestLength;
}
