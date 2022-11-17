/*
https://www.codewars.com/kata/55c45be3b2079eccff00010f

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
  if (words.length === 0) {
    return words;
  } else {
    let splitWords = words.split(" ");
    let count = 1;
    let sortedArray = [];
    while (count < splitWords.length + 1) {
      for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].includes(String(count))) {
          sortedArray.push(splitWords[i]);
          count++;
        }
      }
    }
    const sortedString = sortedArray.join(" ");
    return sortedString;
  }
}

/*
Split words
Check the number in the word
Sort the words in to that order
*/
