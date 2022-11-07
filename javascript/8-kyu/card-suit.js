/*
https://www.codewars.com/kata/5a360620f28b82a711000047
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  for (i = 0; i < card.length; i++) {
    if (card.charAt(i) === "♣") {
      return "clubs";
    }
  }
  for (i = 0; i < card.length; i++) {
    if (card.charAt(i) === "♦") {
      return "diamonds";
    }
  }
  for (i = 0; i < card.length; i++) {
    if (card.charAt(i) === "♥") {
      return "hearts";
    }
  }
  for (i = 0; i < card.length; i++) {
    if (card.charAt(i) === "♠") {
      return "spades";
    }
  }
}

/*
THE PLAN
Check what suit the 2nd character is (refactored to take account of number 10, so using a loop)
Use if statements
Return that suit
*/
