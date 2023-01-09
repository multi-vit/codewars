/*
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function findAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total === 0 ? 0 : total / array.length;
}

/*
PLAN
Iterate through array
Add all numbers together
Divide by length of array
Return result
*/
