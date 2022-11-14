/*
https://www.codewars.com/kata/5412509bd436bd33920011bc

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// One liner: return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

// Original solution paired with Halil on School of Code

// return masked string
function maskify(cc) {
  // cc.length-[4] = no of characters we need to mask, if any
  // create a loop to go through and
  console.log(cc.length);
  // if .length is => 4, return cc
  if (cc.length <= 4) {
    return cc;
  } else {
    // ELSE
    // .slice off the last 4 char,
    let slicedCc = cc.slice(-4);
    // add in the mask to the beginning of the 4 char above
    let maskedChar = "";
    for (i = 0; i < cc.length - 4; i++) {
      maskedChar += `#`;
    }
    let output = maskedChar + slicedCc;
    // make that a new variable so that ori data is preserved
    return output;
  }
}
