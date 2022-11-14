/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Original solution below
// Could turn this in to a one liner with regex: return (str.match(/[aeiou]/ig)||[]).length;

function getCount(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    if (vowels.includes(stringArray[i])) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

/*
PLAN
Need to keep track of how many vowels
Need to check each letter in the string and if it is a vowel, add to the count
Return the count
*/
