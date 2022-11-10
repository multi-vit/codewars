/*
https://www.codewars.com/kata/5949481f86420f59480000e7

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

function oddOrEven(array) {
  let total = array.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(total);
  if (total === 0 || total % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
