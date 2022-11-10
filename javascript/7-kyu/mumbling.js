/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(string) {
  let splitArray = string.split("");
  for (let i = 0; i < splitArray.length; i++) {
    const letterToAdd = splitArray[i].toLowerCase();
    splitArray[i] = splitArray[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      splitArray[i] += letterToAdd;
    }
  }
  let mumble = splitArray.join("-");
  return mumble;
}
