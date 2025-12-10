// *** D E S C R I P T I O N ***//

// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
//  you can use one of slice() substring() or substr() do it. return the result after finished the work.

///***  S O L U T I O N ***//
function cutIt(arr){
  let arrLengths = []
  arr.forEach(w => arrLengths.push(w.length))
 let shortestString = Math.min(...arrLengths)
 return arr.map(w => w.substring(0,shortestString))
}