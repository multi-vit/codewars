/*
https://www.codewars.com/kata/55908aad6620c066bc00002a

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(string) {
  let xCount = 0;
  let oCount = 0;
  const splitArray = string.split("");
  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i].toLowerCase() === "o") {
      oCount++;
    }
    if (splitArray[i].toLowerCase() === "x") {
      xCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

// Alternative regex solution

function xoAlternative(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
