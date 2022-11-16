/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const scoreKey = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const wordArray = x.split(" ");
  let scoresArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    //console.log(`Loop ${i}`);
    const currentWord = wordArray[i];
    //console.log(`Current word is ${currentWord}`);
    let currentWordScore = 0;
    for (let j = 0; j < currentWord.length; j++) {
      const currentLetter = currentWord[j];
      //console.log(`Internal loop ${j}`)
      //console.log(`Letter to test is ${currentLetter}`);
      //console.log(`Score for letter is ${scoreKey[currentLetter]}`)
      currentWordScore += scoreKey[currentLetter];
    }
    scoresArray.push(currentWordScore);
  }
  //console.log(scoresArray);
  const highestScore = Math.max(...scoresArray);
  const highestWordIndex = scoresArray.indexOf(highestScore);
  return wordArray[highestWordIndex];
}

/*
REAL WORLD
Going to be given a sentence, but need to know each word
Need to go through each word and count the score
Need to know highest scoring word so it can be returned
If scores are tied, need to send earliest word back

CODE
Split each word using the space
Need object with letter/score key/value pairs
Need loop to work out score of each word
Need a separate array to keep track of scores for each word
Find the highest score in the array and use that index to return the 
corresponding word from the split array
*/
