/*
https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

891 ==> [8, 9*, 1] ==> [8, 18, 1]
If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Sum all of the final digits:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/

function validate(number) {
  console.log(`Number is ${number}`);
  let n = [...String(number)].map(Number);
  console.log(typeof n[0]);
  console.log(n);
  //If length is even, double every other number starting from 0 index
  if (n.length % 2 === 0) {
    console.log("Array is even");
    for (let i = 0; i < n.length; i += 2) {
      n[i] = n[i] * 2;
    }
  }
  //Else, double every other number starting from 1 index
  else {
    console.log("Array is odd");
    for (let i = 1; i < n.length; i += 2) {
      n[i] = n[i] * 2;
    }
  }
  console.log(n);
  //Loop through array and check for any double digit numbers, subtract 9 from them
  for (let i = 0; i < n.length; i++) {
    if (String(n[i]).length > 1) {
      console.log(`${n[i]} is double digit`);
      n[i] = n[i] - 9;
      console.log(`Num is ${n[i]}`);
    }
  }
  //Add all digits together
  let total = n.reduce(function (a, b) {
    return a + b;
  }, 0);
  //Divide by 10, if remainder === 0 then return true
  console.log(total);
  if (total % 10 === 0) {
    return true;
  }
  //Else return false
  else {
    return false;
  }
}
