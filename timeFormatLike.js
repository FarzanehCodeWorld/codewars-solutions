// Description:
// Build up a method that takes a positive integer and formats it to a 'time - like' format.

// The method must raise an exception if its hour length is less than 3 digits and greater than 4.

// Examples:
// 800   --> '8:00'
// 1000  --> '10:00'
// 1451  --> '14:51'
// 3351  --> '33:51'
// 10000 --> raise an exception


function solution(hour) {
  var string = hour.toString();
  if (string.length < 3 || string.length > 4)  
    throw "Number must have 3 or 4 digits";
  return string.slice(0, -2) + ":" + string.slice(-2);
}
