/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

function isIsogram(string) {
  let splitArray = string.split("");
  for (let i = 0; i < splitArray.length; i++) {
    for (let j = 0; j < splitArray.length; j++) {
      if (j !== i) {
        if (splitArray[i].toLowerCase() === splitArray[j].toLowerCase()) {
          return false;
        }
      }
    }
  }
  return true;
}

// One liner using set: return new Set(str.toUpperCase()).size === str.length;
