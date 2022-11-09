/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
  // Work out if number is even
  // Return "Even" if true
  // Else must be odd so return "Odd"
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
