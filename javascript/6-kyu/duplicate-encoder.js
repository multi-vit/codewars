/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  let lowerWord = word.toLowerCase();
  console.log(lowerWord);
  let arrLowWord = lowerWord.split("");
  console.log(arrLowWord);
  let counts = {};
  arrLowWord.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts);
  let finalString = "";
  for (let i = 0; i < lowerWord.length; i++) {
    console.log(`letter is: ${counts[lowerWord.charAt(i)]}`);
    if (counts[lowerWord.charAt(i)] > 1) {
      finalString += ")";
    } else {
      finalString += "(";
    }
  }
  console.log(finalString);
  return finalString;
}
