/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
  console.log(`Starting with ${text}`);
  const textArray = text.split("");
  let count = 0;
  let matchFound = false;
  for (let i = 0; i < textArray.length; i++) {
    console.log(`Outer Loop number ${i}`);
    for (let j = i + 1; j < textArray.length; j++) {
      console.log(`Inner Loop number ${j}`);
      if (textArray[i].toLowerCase() === textArray[j].toLowerCase()) {
        console.log(`Match found: ${textArray[i]} matches ${textArray[j]}`);
        matchFound = true;
        textArray.splice(j, 1);
        j--;
      } else {
        console.log("No match found");
      }
    }
    if (matchFound === true) {
      console.log("Adding 1 to count");
      count += 1;
      matchFound = false;
    }
    textArray.splice(i, 1);
    i--;
    console.log(textArray);
  }
  return count;
}

/*
Need variable to keep count
Case insensitive so need to lower each character
Loop through each element in the array
Then nest another loop through array
Compare item at index i to item at index j (but skip if i and j are the same)
If match, add 1 to count
Only need to count once though, so array method stops as soon as a match is found?
*/
