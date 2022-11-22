/*
https://www.codewars.com/kata/523f5d21c841566fde000009

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// Original solution below, can also be done in one line: function array_diff(a, b) {return a.filter(e => !b.includes(e));}

function arrayDiff(a, b) {
  if (b.length === 0) {
    return a;
  } else {
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
          a.splice(j, 1);
          j--;
        }
      }
    }
    return a;
  }
}

/*
Check if second array is empty, if it is, return original array
Loop through second array
For each element in second array, loop through first array
Conditional if check to see if element in second array matches element in first array
If true - remove it
If false - skip
*/
