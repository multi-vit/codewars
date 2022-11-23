/*
https://www.codewars.com/kata/52774a314c2333f0a7000688

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  let tracerStack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      tracerStack.push(parens[i]);
    } else {
      if (tracerStack.length === 0) return false;
      let lastValue = tracerStack[tracerStack.length - 1];
      if (parens[i] === ")" && lastValue === "(") {
        tracerStack.pop();
      } else {
        break;
      }
    }
  }
  return tracerStack.length === 0;
}
