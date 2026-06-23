// Description:
// There is a common problem given to interviewees in software, called FizzBuzz. It works as follows: for the numbers between 1 and 100, print "fizz" if it is a multiple of 3 and "buzz" if it is a mutiple of 5, else print the number itself.

// You are in an interview and they ask you to complete fizzbuzz (which can be done in a one-liner in a few langs) and you knock it out of the park.

// Task
// Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the greatest common divisor of all the numbers = 1) and an equally sized list of words, compute its fizzbuzz representation up until the pattern of strings repeats itself.

// Notes:

// Your function should return a list/array, not print it.
// The list of numbers should start from 1.
// The strings are always concatenated from left to right in the appearance of the given list of words.
// The list of numbers may not always be sorted - just use the given order of the numbers.
// All numbers in the first array will always be coprime. This is a safe assumption for your program.
// The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.
// Hint: What is the relation to the numbers given in the list and the length of the list?

// DESCRIPTION
function fizzbuzzPlusPlus(numbers, words) {
  let result = [];
  let n = 1;
  for (number of numbers){n *= number}
  for (let i = 1; i <= n; i++) {
    let newWords = [];
    for (j = 0; j < words.length; j++){
      if (i % numbers[j] === 0) {newWords.push(words[j])}
    }
    if (newWords.length === 0) {
      result.push(i)
    } else {
      result.push(newWords.join(""))
    }
}
  return result;
}
