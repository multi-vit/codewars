/*
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
  console.log(array);
  let oddArray = array.filter((i) => i % 2 !== 0);
  oddArray.sort((a, b) => a - b);
  console.log(oddArray);
  let result = [];
  let oddArrayIndex = 0;
  array.forEach((x) => {
    if (x % 2 === 0) {
      result.push(x);
    } else {
      result.push(oddArray[oddArrayIndex]);
      oddArrayIndex++;
    }
  });
  return result;
}
