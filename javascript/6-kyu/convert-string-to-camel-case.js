/*
https://www.codewars.com/kata/517abf86da9663f1d2000003

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  if (str === "") {
    return str;
  }
  let splitString = [];
  if (str.includes("-")) {
    splitString = str.split("-");
    for (let i = 1; i < splitString.length; i++) {
      splitString[i] =
        splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  }
  if (str.includes("_")) {
    splitString = str.split("_");
    for (let i = 1; i < splitString.length; i++) {
      splitString[i] =
        splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  }
  return splitString.join("");
}

/*
PLAN

Check string for hyphen/underscore
Split string using that character
Loop through resulting array
Ignore the first word (so start i at 1)
Capitalise the first letter of each following word
*/
