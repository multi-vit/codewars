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
