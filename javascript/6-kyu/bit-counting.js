/*
https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function (n) {
  // Program Me
  let count = 0;
  let binaryNumber = n.toString(2);
  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber.charAt(i) === "1") {
      count++;
    }
  }
  return count;
};

//Set count variable to 0
//Get the binary representation of the number passed in using toString(2)
//Loop through that binary
//Check if there is a 1
//Increase the count
