/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  //set murmur variable to store string
  //num = maximum number to count to
  //use a loop until we reach maximum number
  //for each loop, add " sheep..."
  //return murmur variable
  let murmur = "";
  for (i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
};

/*
https://www.codewars.com/kata/54edbc7200b811e956000556

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

/*
PLAN
Set count variable
Loop through array
Check if sheep is true
If so, increase count
Return count outside of loop
*/
