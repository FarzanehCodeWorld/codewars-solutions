// Description
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// Formatting:

// There should be one space in between the two characters
// If one string is longer than the other, there should be a space where the character would be
// Lines should be separated by a newline character. The last line should not contain a trailing newline.
// Examples
// ['Hello','World']

// -->
// `
// H W
// e o
// l r
// l l
// o d`

// // or, with escape sequences:
// "H W\ne o\nl r\nl l\no d"
// Mismatched lengths:

// ['ab', '123'] -->
// `
// a 1
// b 2
//   3`
  
// // or, with escape sequences:
// "a 1\nb 2\n  3"


// Solution
function transposeTwoStrings(arr){
  var result = [];
  var len = Math.max(arr[0].length, arr[1].length);
  
  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
    result.push(column);
  }
  
  return result.join("\n");
}
