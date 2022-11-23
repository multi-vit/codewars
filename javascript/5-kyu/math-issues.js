/*
https://www.codewars.com/kata/5267faf57526ea542e0007fb

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function (number) {
  let numberString = String(number).split(".");
  if (numberString.length === 1) {
    return number;
  }
  if (Number(numberString[1].charAt(0)) >= 5) {
    return Number(numberString[0]) + 1;
  } else {
    return Number(numberString[0]);
  }
};

Math.ceil = function (number) {
  let numberString = String(number).split(".");
  if (numberString.length === 1) {
    return number;
  }
  return Number(numberString[0]) + 1;
};

Math.floor = function (number) {
  let numberString = String(number).split(".");
  return Number(numberString[0]);
};
