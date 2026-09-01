//Description
// In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

// Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

// For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

// More examples in the test cases.

// Good luck!

//Solution
function countHowManyLettersShouldBeRemoved(a,b){
  if(b.length > a.length) {return 0}
  let map = new Map();
  for(let c of b) {map.set(c,(map.get(c) || 0)+1) }
  for(let c of a) {
    if(map.has(c)) {map.set(c,map.get(c)-1)}
}
 for(let[_,v] of map) {
   if(v>0) {return 0}
} 
return a.length - b.length
}
