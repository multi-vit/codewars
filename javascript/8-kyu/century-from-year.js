/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  let century = 0;
  if (year <= 100) {
    return 1;
  } else {
    let stringNumber = year.toString();
    if (year % 100 === 0) {
      return Number(stringNumber.slice(0, stringNumber.length - 2));
    } else {
      return Number(stringNumber.slice(0, stringNumber.length - 2)) + 1;
    }
  }
}
