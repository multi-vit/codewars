/*
https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/javascript

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

*/

// Original solution below, can also be done in one-liner: return array.join('\n');

function toCsvText(array) {
  let returnString = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j === array[i].length - 1) {
        returnString += array[i][j];
      } else {
        returnString += array[i][j] + ",";
      }
    }
    if (i !== array.length - 1) {
      returnString += "\n";
    }
  }
  return returnString;
}

/*
PLAN
Declare empty string variable
Add each element in each child array to the string, separated by a comma
Add a new line at end of each array, apart from last one
*/
