/*
https://www.codewars.com/kata/53dc23c68a0c93699800041d

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

//Below solution was before I learnt about .join() method!
//Now would use words.join(" ")

function smash(words) {
  //Set sentence variable to add words
  //Loop through array
  //Add each word to sentence (with a space after)
  //Remove last empty space
  //Return sentence variable
  let sentence = "";
  for (i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  sentence = sentence.slice(0, -1);
  return sentence;
}
