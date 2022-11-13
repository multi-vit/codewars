/*
https://www.codewars.com/kata/55f2b110f61eb01779000053

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  //Check a and b to determine start number (or whether to return immediately)
  if (a === b) {
    return a;
  } else {
    let count = 0;
    let startNum = 0;
    let endNum = 0;
    console.log(`a = ${a} and b = ${b}`);
    if (a > b) {
      startNum = b;
      endNum = a;
    } else {
      startNum = a;
      endNum = b;
    }
    for (let i = startNum; i < endNum + 1; i++) {
      count += i;
      console.log(`Updated count is ${count}`);
    }
    return count;
  }
}
