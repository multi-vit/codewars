/*
https://www.codewars.com/kata/5264d2b162488dc400000001

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// Original solution below

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

/* 

function spinWords(string) {
  let wordsArray = string.split(" ");
  if (wordsArray.length === 1) {
    if (wordsArray[0].length >= 5) {
      let word = wordsArray[0];
      let reversedWord = "";
      for (let i = word.length; i > 0; i--) {
        reversedWord += word[i - 1];
      }
      return reversedWord;
    } else {
      return string;
    }
  } else {
    let reversedWordsArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].length >= 5) {
        let word = wordsArray[i];
        let reversedWord = "";
        for (let i = word.length; i > 0; i--) {
          reversedWord += word[i - 1];
        }
        reversedWordsArray.push(reversedWord);
      } else {
        reversedWordsArray.push(wordsArray[i]);
      }
    }
    const answer = reversedWordsArray.join(" ");
    return answer;
  }
}

/*
Split array
Check each element in the array to see if it's longer than 5 letters
If it is, reverse it
If array length is 1, return the word
Else, join the array back in to a string, separated by a space
*/
