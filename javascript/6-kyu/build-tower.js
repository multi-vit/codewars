/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  let tower = [];
  let totalStars = nFloors * 2 - 1;
  let star = "*";
  let space = " ";
  let totalSpaces = 0;
  console.log(totalStars);
  for (let i = nFloors; i > 0; i--) {
    let currentFloor = "";
    currentFloor += space.repeat(totalSpaces);
    currentFloor += star.repeat(totalStars);
    currentFloor += space.repeat(totalSpaces);
    console.log(currentFloor);
    tower.push(currentFloor);
    totalStars -= 2;
    totalSpaces++;
  }
  console.log(tower);
  return tower.reverse();
}

/*
Floor formula is floor * 2 - 1
Need variable to keep track of how many stars are in lowest floor
Need variable to store array
Use a loop to iterate through nFloors
Start at bottom floor as this will be full of stars
Next floor up adds a space either side
Then reverse array
*/
