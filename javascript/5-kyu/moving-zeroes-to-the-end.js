/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(array) {
  let zeroCount = 0;
  let sortedArray = array
    .map((element, index) => {
      if (element === 0) {
        zeroCount += 1;
      } else {
        return element;
      }
    })
    .filter((element, index) => {
      return element !== undefined;
    });
  //console.log(`There are ${zeroCount} zeroes, let's add those on`)
  for (let i = 0; i < zeroCount; i++) {
    sortedArray.push(0);
  }
  return sortedArray;
}

/*
Use array method to search for 0s
Move them to the end!
*/
