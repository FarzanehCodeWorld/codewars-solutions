// Task
// Given an array of strings, produce a single string as follows:

// Repeat the following steps while there is more than one string in the array:

// - find the shortest string in the array 
//   (if there are several strings of the same length take the leftmost one);
// - find the shortest string among the rest 
//   (if there are several strings of the same length take the rightmost one);
// - extract the chosen strings from the array;
// - append the result of their concatenation (the second string should be added
//   to the end of the first string) to the right end of the array.
// After the algorithm has finished, there will be a single string left in the array. Return that string.

// Input/Output
// [input] string array init

// A non-empty array of strings.

// 1 ≤ init.length ≤ 20,

// 0 ≤ init[i].length ≤ 10.

// [output] a string

// Example
// For init = ["aaa", "dd", "bbbbb"], the output should be "bbbbbddaaa".

// The concatenation process:

// initial string array:["aaa", "dd", "bbbbb"]
// find the shortest string in the array ---> "dd"
// find the shortest string among the rest ---> "aaa"
// extract the chosen strings from the array ---> ["bbbbb"]
// append the result of their concatenation 
// to the right end of the array---> ["bbbbb","ddaaa"]

// repeat the process above, until initial array contains only 1 element

// Now the string array is : ["bbbbb","ddaaa"]
// find the shortest string in the array ---> "bbbbb"
// find the shortest string among the rest ---> "ddaaa"
// extract the chosen strings from the array ---> []
// append the result of their concatenation 
// to the right end of the array---> ["bbbbbddaaa"]

// return this element
// For init = ["a","abc","abcc","aaa","z","","qw"],

// the output should be "abcaaaabccqwaz".

// The concatenation process:

// initial string array:["a","abc","abcc","aaa","z","","qw"]
// find the shortest string in the array ---> ""
// find the shortest string among the rest ---> "z"(rightmost one)
// extract the chosen strings from the array 
// ---> ["a","abc","abcc","aaa","qw"]
// append the result of their concatenation 
// to the right end of the array---> ["a","abc","abcc","aaa","qw","z"]

// repeat the process above, until initial array contains only 1 element

// Now the string array is : ["a","abc","abcc","aaa","qw","z"]
// find the shortest string in the array ---> "a"(leftmost)
// find the shortest string among the rest ---> "z"(rightmost one)
// extract the chosen strings from the array 
// ---> ["abc","abcc","aaa","qw"]
// append the result of their concatenation 
// to the right end of the array---> ["abc","abcc","aaa","qw","az"]

// Now the string array is : ["abc","abcc","aaa","qw","az"]
// find the shortest string in the array ---> "qw"(leftmost)
// find the shortest string among the rest ---> "az"(rightmost one)
// extract the chosen strings from the array 
// ---> ["abc","abcc","aaa"]
// append the result of their concatenation 
// to the right end of the array---> ["abc","abcc","aaa","qwaz"]

// Now the string array is : ["abc","abcc","aaa","qwaz"]
// find the shortest string in the array ---> "abc"(leftmost)
// find the shortest string among the rest ---> "aaa"(rightmost one)
// extract the chosen strings from the array 
// ---> ["abcc","qwaz"]
// append the result of their concatenation 
// to the right end of the array---> ["abcc","qwaz","abcaaa"]

// Now the string array is : ["abcc","qwaz","abcaaa"]
// find the shortest string in the array ---> "abcc"(leftmost)
// find the shortest string among the rest ---> "qwaz"(rightmost one)
// extract the chosen strings from the array 
// ---> ["abcaaa"]
// append the result of their concatenation 
// to the right end of the array---> ["abcaaa","abccqwaz"]

// Now the string array is : ["abcaaa","abccqwaz"]
// find the shortest string in the array ---> "abcaaa"
// find the shortest string among the rest ---> "abccqwaz"
// extract the chosen strings from the array 
// ---> []
// append the result of their concatenation 
// to the right end of the array---> ["abcaaaabccqwaz"]

function concatenationProcess(s) {
  if (!s.length) return "";
  if (s.length == 1) return s[0];
  s = s.slice().sort((a, b) => a.length - b.length);
  let a = s.shift();
  let b = s.filter(w => w.length == Math.min(...s.map(e => e.length))).at(-1);
  let i = s.lastIndexOf(b);
  s.splice(i, 1);
  return concatenationProcess(s.concat([a + b]));
}
