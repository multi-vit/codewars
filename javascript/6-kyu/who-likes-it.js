/*
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// Originally completed using if conditionals, but best use is switch case:

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

/* 
function likes(names) {
  if(names.length === 0){
    return "no one likes this";
  };
  if(names.length === 1){
    return `${names[0]} likes this`;
  };
  if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`;
  };
  if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  };
  if(names.length >= 4){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  };
}

/*
REAL WORLD
Going to get a list of people who like something
Could be empty - no one likes this
Could be one person, so likes is plural - Person likes this
Could be more than 1 person, so like is singular - People like this
If 4 or more names - First 2 people and 2 others like this

CODE
Need some conditionals based on length of array
If empty - return no one likes this
If 1 person - return Person likes this
If 2 people - return names
If 3 people - return names
If 4 people - first two names and (length - 2) like this
*/
