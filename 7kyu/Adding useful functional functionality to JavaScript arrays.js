// *** D e s c r i p t i o n ***//

// The JavaScript standard now includes functional 
// additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum.

// Implement a version of range and sum (which you can then copy and use in your future kata to make them smaller).

// Array.range(start, count) should return an array containing count numbers from start to start + count ( exclusive )

// Example: Array.range(0, 3) returns [0, 1, 2]

// array.sum() should return the sum of all numbers in array

// Example: [0, 1, 2].sum() returns 3
// Example: Array.range(-1,4).sum() should return 2

// While not forbidden try to write both function without using a for loop

//***  S o l u t i o n ***//
Array.range = function(start, count) {
let arrayLength = start + count
let arr = []
 while(start < arrayLength){
   arr.push(start)
   start++
}
  return arr;
}

Array.prototype.sum = function() {
  let sum = 0;
  let arr = this.slice()
  while(arr.length > 0){
    sum += arr.pop()
}
  return sum;
}
