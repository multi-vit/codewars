/*
https://www.codewars.com/kata/54da539698b8a2ad76000228

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones
Everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  walk.map((direction) => {
    if (direction === "n") {
      north += 1;
    }
    if (direction === "s") {
      south += 1;
    }
    if (direction === "e") {
      east += 1;
    }
    if (direction === "w") {
      west += 1;
    }
  });
  if (north === south && east === west) {
    return true;
  } else {
    return false;
  }
}

/*
If 1 city block = 1 minute, we need to walk 10 blocks
Need to check directions to ensure we have returned to starting point (perhaps compare number of opposite directions are equal?)
*/
