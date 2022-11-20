/*
https://www.codewars.com/kata/541c8630095125aba6000c00

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// Original solution below, but math one liner is: function digital_root(n) {return (n - 1) % 9 + 1;}

function digital_root(n) {
  let digits = n.toString().split("");
  let realDigits = digits.map(Number);
  let sum = realDigits.reduce(function (a, b) {
    return a + b;
  }, 0);
  while (sum.toString().length > 1) {
    digits = sum.toString().split("");
    realDigits = digits.map(Number);
    sum = realDigits.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  return sum;
}

/*
Separate the number (toString.split)
While the number's length is more than 1 digit
Loop through, map string to an array of numbers
Add the array together (for loop)
Check the result
*/
