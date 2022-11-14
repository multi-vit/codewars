/*
https://www.codewars.com/kata/546e2562b03326a88e000020

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(number) {
  let splitArray = number.toString().split("");
  for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i] ** 2;
  }
  let squaredString = splitArray.join("");
  return Number(squaredString);
}

/*
PLAN
Convert number to string
Split it in to individual digits
Convert to array
Use a for loop
Square each element in the array
Concatenate together
Change back to number
*/
