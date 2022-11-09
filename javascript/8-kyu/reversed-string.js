/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(string) {
  let splitString = string.split("");
  splitString.reverse();
  const reversedString = splitString.join("");
  return reversedString;
}

//Can chain these all together in to a one-line statement:

function reverse(str) {
  return str.split("").reverse().join("");
}
