//D E S C R I P T I O N
An array is called centered-N if some consecutive sequence of elements of the array sum to N and this sequence is preceded and followed by the same number of elements.
Example:
[3,2,10,4,1,6,9] is centered-15
because the sequence 10,4,1 sums to 15 and the sequence 
is preceded by two elements [3,2] and followed by two elements [6,9]
Write a method called isCenteredN that returns :

true if its array argument is not empty and centered-N or empty and centered-0
otherwise returns false.

// S U L U T I O N
function isCenteredN(arr, n) {
 if(arr.reduce((acc,val) => acc + val,0) === n){
   return  true
   
 }
  return arr.length > 1 ? isCenteredN(arr.slice(1,-1),n) : false
}
