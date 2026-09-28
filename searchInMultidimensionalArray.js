//Description
// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:

// ['a','b',['c','d',['e']]] , 'e' --> true
// ['a','b',['c','d',['e']]] , 'a' --> true
// ['a','b',['c','d',['e']]] , 'f' --> false

// Solution
var locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}
