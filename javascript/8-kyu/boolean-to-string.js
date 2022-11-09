/*
https://www.codewars.com/kata/551b4501ac0447318f0009cd

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b) {
  return b.toString();
}

/*
Similar variation but returning yes or no

https://www.codewars.com/kata/53369039d7ab3ac506000467

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

function boolToWord(boolean) {
  if (boolean === true) {
    return "Yes";
  } else {
    return "No";
  }
}
