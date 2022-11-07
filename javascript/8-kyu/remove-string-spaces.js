/*
https://www.codewars.com/kata/57eae20f5500ad98e50002c5

Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
  if (/\s/.test(x)) {
    let spaceNo = x.replace(/\s/g, "");
    return spaceNo;
  } else {
    return x;
  }
}
/*
Function needs to take in a spaced string value (x)
Check if there are white spaces
/\s/.test(str);
If there are spaces
"hello world".replace(/\s/g, "");
remove blank spaces and save into a new variable
return new variable string without spaces
Else return original input
*/
