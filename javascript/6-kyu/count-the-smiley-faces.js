/*
https://www.codewars.com/kata/583203e6eb35d7980400002a
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.

PLAN
Need variable to keep count
Iterate through array
Check if 1st char is not : or ;
Check if 2nd char is not - or ~ : if not, implement 3rd char check here
Check if 3rd char is not ) or D
If any of these statements are true, break
Else, add 1 to count
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smileyCount = 0;
  let shortSmileyRegEx = /(:|;)(\)|D)/;
  let longSmileyRegEx = /(:|;)(-|~|\)|D)(\)|D)/;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      if (longSmileyRegEx.test(arr[i])) {
        smileyCount++;
      }
    } else {
      if (shortSmileyRegEx.test(arr[i])) {
        smileyCount++;
      }
    }
  }
  return smileyCount;
}
