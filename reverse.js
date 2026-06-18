# D E S C R I P T I O N
# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

//S O L U T I O N
function reverse(str){
  let result = []
  for(let i = str.length-1; i>=0; i--){
    result.push(str[i])
}
 console.log(result.join('')) 
} 
