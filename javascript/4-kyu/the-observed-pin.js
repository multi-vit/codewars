/*
https://www.codewars.com/kata/5263c6999e0f40dee200059d

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!
*/

function getPINs(observed) {
  const possibilities = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
    0: ["8", "0"],
  };

  function allPossibleCases(allArrays) {
    if (allArrays.length === 1) {
      return allArrays[0];
    } else {
      let result = [];
      let allCasesOfRest = allPossibleCases(allArrays.slice(1)); // recur with the rest of array
      for (let i = 0; i < allCasesOfRest.length; i++) {
        for (let j = 0; j < allArrays[0].length; j++) {
          result.push(allArrays[0][j] + allCasesOfRest[i]);
        }
      }
      return result;
    }
  }

  let allArrays = [];
  for (let i = 0; i < observed.length; i++) {
    allArrays.push(possibilities[observed[i]]);
  }
  let allPossibilities = allPossibleCases(allArrays);
  return allPossibilities;
}

/*
Have a variable to keep track of return array
Have an object of key/values - with key of each number and value an array representing possiblities
Total possibilities are the lengths of each possibilities array for each digit multiplied by each other
For number of digits - need to loop through and keep totalDigits - 1 the same whilst iterating through final digit
Then change one of the totalDigits - 1 and iterate again, do this until all possibilities for this digit have also been used
Then repeat again for totalDigits - 2
*/
