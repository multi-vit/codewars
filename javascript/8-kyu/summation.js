/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
  //set total variable to keep track of sum
  //num is maximum number
  //loop until maximum number reached
  //in each loop, add current number to sum
  //return total variable
  let total = 0;
  for (i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};
