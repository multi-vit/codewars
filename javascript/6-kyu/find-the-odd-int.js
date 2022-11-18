/*
https://www.codewars.com/kata/54da5a58ea159efa38000836

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  let numbersObject = {};
  for (let i = 0; i < A.length; i++) {
    const currentNumber = A[i];
    if (!numbersObject[currentNumber]) {
      numbersObject[currentNumber] = 1;
    } else {
      numbersObject[currentNumber] += 1;
    }
  }
  const keysArray = Object.keys(numbersObject);
  let answer = 0;
  keysArray.forEach((key, index) => {
    if (numbersObject[key] % 2 !== 0) {
      console.log(`Answer is ${key}`);
      answer = Number(key);
    }
  });
  return answer;
}

/*
Need a way of keeping track of how many times each number appears, 
whilst knowing what the number is - object with key/value?
Then loop through object to find the odd number
Return that key
*/
