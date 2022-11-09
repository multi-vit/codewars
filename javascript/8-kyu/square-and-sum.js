/*
https://www.codewars.com/kata/515e271a311df0350d00000f

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  let count = 0;
  numbers.forEach((number) => {
    const square = number * number;
    count += square;
  });
  return count;
}

//Could also use a reducer:

function squareAndSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
