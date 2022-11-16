/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  let value1Count = [0, 0, 0];
  let value2Count = [0, 0, 0];
  value1Count[0] = arr[0];
  value1Count[1] += 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === value1Count[0]) {
      value1Count[1] += 1;
      value1Count[2] = i;
    } else {
      value2Count[1] += 1;
      value2Count[2] = i;
    }
  }
  if (value1Count[1] === 1) {
    return arr[value1Count[2]];
  } else {
    return arr[value2Count[2]];
  }
}
