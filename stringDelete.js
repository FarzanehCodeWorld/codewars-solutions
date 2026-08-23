//Description
// In Ruby, you can delete characters of a string like so:

// "hello".delete("l") -> "heo"
// We're going to beef the delete method up a little bit for javascript. 1st, we're going to allow multiple arguments, and we're going to accept strings and regular expressions. String arguments will remove all occurences of the substring. Unlike the string arguments, Regular Expressions must use the global flag to delete all occurences. Invalid arguments should be ignored. Any matches should be removed from the returned string.

// Examples:

// "1: Are you enjoying this kata?".delete(/[^a-z ]/gi) -> " Are you enjoying this kata"
// "1: Are you enjoying this kata?".delete("a", "?", [], /[0-9]/g) -> ": Are you enjoying this kt"

//Solution
String.prototype.delete=function(...args){
  var that=""+this;
  args.forEach(x=>{
    if (typeof x=="string") that=that.replace(new RegExp(x,"g"),"");
    if (typeof x!="number") that=that.replace(x,"");
  });
  return that;
};
