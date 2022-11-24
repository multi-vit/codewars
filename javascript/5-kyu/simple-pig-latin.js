/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  let stringArray = str.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    if (/[A-Za-z]/gm.test(stringArray[i])) {
      let word = stringArray[i];
      const firstLetter = word.substring(0, 1);
      const restOfWord = word.substring(1);
      word = restOfWord + firstLetter;
      word += "ay";
      stringArray[i] = word;
    }
  }
  return stringArray.join(" ");
}
