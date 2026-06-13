//D E S C R I P T I O N
# Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']
// S O L U T I O N
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
