/*
https://www.codewars.com/kata/57f781872e3d8ca2a000007e
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x) {
  const doubledArray = x.map((number) => {
    return number * 2;
  });
  return doubledArray;
}