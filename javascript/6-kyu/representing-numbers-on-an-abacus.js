/*
https://www.codewars.com/kata/60d7a52b57c9d50055b1a1f7

How does an abacus work?
An abacus is a mechanical tool for counting and performing simple mathematical operations. It consists of vertical poles with beads, where the position of the beads indicates the value stored on the abacus. The abacus in the image below, for example, is storing the number 1703.

Each pole represents a decimal digit of the number, where the rightmost pole indicates the ones digit, the second to the right the tens digit, the third to the right the hundreds digit, and so on.

Each pole is split into an upper and a lower portion. Each bead in the lower portion represents a single unit for the pole (1 for the ones pole, 10 for the tens pole, 100 for the hundreds pole, etc.) The bead in the upper portion represents 5 units for the pole (5 for the ones pole, 50 for the tens pole, 500 for the hundreds pole, etc.)

For the upper portion of the pole, the bead is counted if it is in the down position. For the lower portion of the pole, a bead is counted if it is in the up position.
*/

/**
 * @param {number} n - range is 0 <= n <= 999999999
 * @return {string}
 */
const createAbacus = (n) => {
  console.log(`We're working with ${n}`);
  let digitArr = Array.from(String(n), Number);
  let rowOne = "";
  let rowTwo = "";
  let rowThree = "---------";
  let rowFour = "";
  let rowFive = "";
  let rowSix = "";
  let rowSeven = "";
  let rowEight = "";
  for (let i = digitArr.length - 1; i >= 0; i--) {
    console.log(`Here's the current digit ${digitArr[i]}`);
    if (digitArr[i] >= 5) {
      rowOne = " " + rowOne;
      rowTwo = "*" + rowTwo;
    }
    if (digitArr[i] < 5) {
      rowOne = "*" + rowOne;
      rowTwo = " " + rowTwo;
    }
    if (digitArr[i] === 0) {
      rowFour = " " + rowFour;
      rowFive = "*" + rowFive;
      rowSix = "*" + rowSix;
      rowSeven = "*" + rowSeven;
      rowEight = "*" + rowEight;
    }
    if (digitArr[i] === 1 || digitArr[i] === 6) {
      rowFour = "*" + rowFour;
      rowFive = " " + rowFive;
      rowSix = "*" + rowSix;
      rowSeven = "*" + rowSeven;
      rowEight = "*" + rowEight;
    }
    if (digitArr[i] === 2 || digitArr[i] === 7) {
      rowFour = "*" + rowFour;
      rowFive = "*" + rowFive;
      rowSix = " " + rowSix;
      rowSeven = "*" + rowSeven;
      rowEight = "*" + rowEight;
    }
    if (digitArr[i] === 3 || digitArr[i] === 8) {
      rowFour = "*" + rowFour;
      rowFive = "*" + rowFive;
      rowSix = "*" + rowSix;
      rowSeven = " " + rowSeven;
      rowEight = "*" + rowEight;
    }
    if (digitArr[i] === 4 || digitArr[i] === 9) {
      rowFour = "*" + rowFour;
      rowFive = "*" + rowFive;
      rowSix = "*" + rowSix;
      rowSeven = "*" + rowSeven;
      rowEight = " " + rowEight;
    }
    if (digitArr[i] === 5) {
      rowFour = " " + rowFour;
      rowFive = "*" + rowFive;
      rowSix = "*" + rowSix;
      rowSeven = "*" + rowSeven;
      rowEight = "*" + rowEight;
    }
    console.log(
      `Here're the latest rows ${
        "\n" +
        rowOne +
        "\n" +
        rowTwo +
        "\n" +
        rowThree +
        "\n" +
        rowFour +
        "\n" +
        rowFive +
        "\n" +
        rowSix +
        "\n" +
        rowSeven +
        "\n" +
        rowEight
      }`
    );
  }
  for (let i = 9 - digitArr.length; i > 0; i--) {
    rowOne = "*" + rowOne;
    rowTwo = " " + rowTwo;
    rowFour = " " + rowFour;
    rowFive = "*" + rowFive;
    rowSix = "*" + rowSix;
    rowSeven = "*" + rowSeven;
    rowEight = "*" + rowEight;
  }
  let finalString =
    rowOne +
    "\n" +
    rowTwo +
    "\n" +
    rowThree +
    "\n" +
    rowFour +
    "\n" +
    rowFive +
    "\n" +
    rowSix +
    "\n" +
    rowSeven +
    "\n" +
    rowEight;
  return finalString;
};

/**
 * @param {string} abacus - abacus string
 * @return {number}
 */
const readAbacus = (abacus) => {
  const abacusArray = abacus.split(/\r?\n/);
  let numberString = "";
  let rowOne = abacusArray[0];
  let rowTwo = abacusArray[1];
  let rowFour = abacusArray[3];
  let rowFive = abacusArray[4];
  let rowSix = abacusArray[5];
  let rowSeven = abacusArray[6];
  let rowEight = abacusArray[7];
  for (let i = rowOne.length - 1; i > -1; i--) {
    let currentDigit = 0;
    if (rowTwo[i] === " " && rowFour[i] === " ") {
      numberString = currentDigit + numberString;
    } else {
      if (rowTwo[i] === "*") {
        currentDigit += 5;
      }
      if (rowFour[i] === " ") {
        numberString = currentDigit + numberString;
      } else {
        currentDigit += 1;
        if (rowFive[i] === " ") {
          numberString = currentDigit + numberString;
        } else {
          currentDigit += 1;
          if (rowSix[i] === " ") {
            numberString = currentDigit + numberString;
          } else {
            currentDigit += 1;
            if (rowSeven[i] === " ") {
              numberString = currentDigit + numberString;
            } else {
              currentDigit += 1;
              numberString = currentDigit + numberString;
            }
          }
        }
      }
    }
  }
  return Number(numberString);
};

/*
readAbacus

Do the opposite of create!
Split abacus by line
Work backwards for each digit (for loop starting at row.length - 1 and descending)
For each digit:
Ignore row 3
If row 2 and 4 are " ", the number is 0
If row 2 is "*" then number is >=5
If there is a star in row 4, add 1 for each row there is a star until there is a " "
Add digit to beginning of numberString
Typecast to number
Return number
*/

/*
createAbacus

n is a number
split it in to its constituents
work backwards through the array (from right to left - ones first)
have a variable for each row on the abacus (8 in total)
if digit is greater than 5, the top bead needs to be down (so row 1 = " " and row 2 = "*")
else, (row 1 = "*", row 2 = " ")
Row 3 is always the -------- line
row 4 is "*" if digit is greater than or equal to 1
row 5 is "*" if digit is greater than or equal to 2 but not 6
row 6 is "*" if digit is greater than or equal to 3 but not 7
row 7 is "*" if digit is greater than or equal to 4 but not 8
row 8 is "*" if digit is greater than or equal to 5 but not 9
number of beads needed from digit (-5 if using top bead e.g. if number is greater than 5)
*/
