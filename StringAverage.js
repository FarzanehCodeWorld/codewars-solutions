// Description
// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a

//Solution
let splitedString = numbs.split(' ');
  let stringNumsObject = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

  for (let i = 0; i < splitedString.length; i++) {
    splitedString[i] = stringNumsObject[splitedString[i]] ?? 'n/a';
  }

  // filter out any 'n/a' values so they don't break the math
  let validNumbers = splitedString.filter(n => n !== 'n/a');

  let sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
  let average = sum / validNumbers.length;

  return average;
