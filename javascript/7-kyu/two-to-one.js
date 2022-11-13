/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  const combinedString = s1 + s2;
  const combinedArray = combinedString.split("");
  let setArray = [...new Set(combinedArray)];
  setArray.sort();
  return setArray.join("");
}

/*
join both strings together
convert to array
remove duplicates
sort it alphabetically
join array
return it
*/
