/*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  let splitArray = str.split(" ");
  for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i].split("").reverse().join("");
    console.log(splitArray[i]);
  }
  return splitArray.join(" ");
}
