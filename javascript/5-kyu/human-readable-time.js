/*
https://www.codewars.com/kata/52685f7382004e774f0001f7

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(nSeconds) {
  let hours = Math.floor(nSeconds / 3600);
  nSeconds %= 3600;
  let minutes = Math.floor(nSeconds / 60);
  let seconds = nSeconds % 60;

  console.log("hours: " + hours);
  console.log("minutes: " + minutes);
  console.log("seconds: " + seconds);

  minutes = String(minutes).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  return hours + ":" + minutes + ":" + seconds;
}

/*
Need to convert time in to hours, minutes and seconds
Convert to hours /3600
Remove whole numbers
Convert remaining decimal to minutes *60
Remove whole numbers
Convert remaining decimal to seconds *60

Need to format these figures in to readable string and use padding if single digit
Convert numbers to string
Use padStart(2, "0")
*/
