/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
  return /^([0-9]{4}|[0-9]{6})$/.test(pin);
  //return true or false
}

/*
Check if PIN is 4 or 6 digits
Check if PIN only contains numbers
If both true, return true
Else return false
*/
