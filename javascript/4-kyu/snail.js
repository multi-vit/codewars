/*
https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function (array) {
  if (array.length === 0) {
    return [];
  }
  //   console.log(`Starting array =`)
  //   console.log(array)
  let snail = [];
  while (array.length > 1) {
    snail.push(...array[0]);
    //     console.log(`Snail = ${snail}`)
    array.shift();
    //     console.log(`Updated array = ${array}`)
    //get the items at the end of each array (right side)
    for (let i = 0; i < array.length; i++) {
      snail.push(array[i].pop());
      //       console.log(`Snail = ${snail}`)
      //       console.log(`Updated array = ${array}`)
    }
    //get the bottom row from end to front (bottom row reversed)
    let bottomRow = array.pop();
    snail.push(...bottomRow?.reverse());
    //     console.log(`Snail = ${snail}`)
    //     console.log(`Updated array = ${array}`)
    //get the items at the beginning of the arrays (left side)
    for (let i = array.length - 1; i > 0; i--) {
      snail.push(array[i].shift());
      //       console.log(`Snail = ${snail}`)
      //       console.log(`Updated array = ${array}`)
    }
  }
  if (array.length > 0) {
    snail.push(...array[0]);
  }
  return snail;
};

/*
Need array to push to and return
Array of arrays is always square

loop through the parent array - while array still has items in it

get the first row (first array in the array)

get the items at the end of each array (right side) 

get the bottom row from end to front (bottom row reversed)

get the items at the beginning of the arrays (left side)
*/
