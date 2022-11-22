/*
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(string) {
  if (string.length === 0) {
    return [];
  }
  let pairArray = [];
  for (let i = 0; i < string.length; i += 2) {
    pairArray.push(string.slice(i, i + 2));
  }
  if (pairArray[pairArray.length - 1].length === 1) {
    pairArray[pairArray.length - 1] += "_";
  }
  return pairArray;
}

/*
PLAN
Declare empty array to populate
Loop through string, incrementing by 2 to account for pairs
Slice the 2 characters from the string and push them to empty array
Check if last element in result array has 1 character and if so, add "_" to it
One test check if for empty array return if string length is 0, so went back and added that
*/
