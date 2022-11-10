/*
https://www.codewars.com/kata/5668e3800636a6cd6a000018

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

function ghostBusters(building) {
  let spaces = true;
  const strippedBuilding = building.replace(/\s+/g, "");
  if (building === strippedBuilding) {
    spaces = false;
  }
  if (spaces) {
    return strippedBuilding;
  } else {
    return "You just wanted my autograph didn't you?";
  }
}
/*
PLAN

Set variable as to whether there are spaces
Use regex to remove whitespaces
Check stripped string against original string
If they match, there are no spaces to set variable to false
if spaces is true, return stripped string
Else return "You just wanted my autograph"
*/
