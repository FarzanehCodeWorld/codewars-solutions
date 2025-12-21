// *** D E S C R I P T I O N ***//

// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

///***  S O L U T I O N ***//

function combine() {
 let obj = {}
 for(let i = 0; i < arguments.length; i++){
   for(let key in arguments[i]){
     obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key]
}
}
return obj;
}
const objB = { a: 3, c: 6, d: 3 }
const objA = { a: 10, b: 20, c: 30 }
combine(objA,objB)