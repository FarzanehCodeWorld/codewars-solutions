// Description
// Let's define the special score (ssc) of an array of integers to be the sum of each integer multiplied by its corresponding index plus one in the array.

// E.g.: with the array [6, 12, -1]

// arr =   [6,      12,       -1 ]
// ssc =   1*6  +  2*12  +  3*(-1) = 6 + 24 - 3 = 27
// The array given in the example has six (6) unique permutations and are with the corresponding ssc:

// Permutations      Special Score (ssc)
// [6, 12, -1]       1*6 + 2*12 + 3*(-1) = 27
// [6, -1, 12]       1*6 + 2*(-1) + 3*12 = 40
// [-1, 6, 12]       1*(-1) + 2*6 + 3*12 = 47
// [-1, 12, 6]       1*(-1) + 2*12 + 3*6 = 41
// [12, -1, 6]       1*12 + 2*(-1) + 3*6 = 28
// [12, 6, -1]       1*12 + 2*6 + 3*(-1) = 21
// The total sum of the ssc's of all the possible permutations is: 27 + 40 + 47 + 41 + 28 + 21 = 204

// The maximum value for the ssc is 47.

// The minimum value for the ssc is 21.

// We need to write a special function that receives an array of uncertain number of elements (the elements may occur more than once) and outputs a list of dictionaries with the following data:

// [{"total perm": __}, {"total ssc": __}, {"max ssc": __}, {"min ssc": __}]
// For the example we have above will be:

// [6, 12, -1] --> [{"total perm":6}, {"total ssc":204}, {"max ssc":47}, {"min ssc":21}]
// You may assume that you will never receive an empty array.

// Also you will never receive an array with the same element in all the positions like [1, 1, 1, 1, 1], but you may have elements occurring twice or more like [1, 1, 1, 2, 3]. Remember, consider only the unique permutations of the array!

// Enjoy it!!

// Solution
function sscForperm(arr){
  var permutations = perm(arr);
   
  var scores = permutations.map(sub => sub.reduce((a,b,i) => a + (b * (i + 1)),0)).sort((a,b) => a - b);
  var total  = scores.reduce((a,b) => a + b, 0);
  var len    = permutations.length;

  return [{"total perm": len}, {"total ssc": total}, {"max ssc": scores[len - 1]}, {"min ssc": scores[0]}];
}

function perm(arr) {
  if(arr.length < 2) { return arr; }
  
  var permutations = [];
  
  for(var i = 0; i < arr.length; i++) {
    var num = arr[i];
    
    if(arr.indexOf(num) === i) {
      var rem = arr.slice(0,i).concat(arr.slice(i + 1));
      var sub = perm(rem);
    
      for(var j = 0; j < sub.length; j++) {
        permutations.push([].concat(num, sub[j]));
      }
    }
  }
  
  return permutations;
}
