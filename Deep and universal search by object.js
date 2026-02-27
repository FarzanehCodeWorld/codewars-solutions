// Task:
// Your task is to implement a function called findItems that takes an object and a list of parameters to be found in that object. The function should return an object containing the found values and their corresponding paths in the format of key-value pairs (see example below). If any of the parameters is a predicate function (value => boolean), the function should be applied to the values in the object, and only the values that meet the condition in the function should be returned.

// Rules:

// The path should always start with the word "tree".
// Don't apply predicates to objects or arrays.
// We must be strict when it comes to the data we are searching - if it is null, then we are looking for null; if it is '2', then we are looking for '2' specifically as a string, and any values found with the number (like 2) type will be incorrect.
// Arrays inside an object will not contain additional nested objects.
// If we have found the required element in the array, we write its index in the path string in the following format: "[index]".
// If no search arguments are passed, we should return {}
// Objects will not contain cyclic references
// An example of a tree:

// const tree = {
//   a: 4,
//   t: {
//     c: 5,
//     f: 1,
//     r: {
//       y: 90,
//       e: {
//         e: "eert",
//       },
//       u: [123, 34, 90],
//     },
//   },
// };
// An input example.

// findItems(tree, "eert", (value) => value > 50 && value < 100)
// An example of what your function should return:

// {
//   "tree.t.r.y": 90,
//   "tree.t.r.e.e": "eert",
//   "tree.t.r.u[2]": 90,
// }
// S O L U T I O N
const findItems = (obj, ...arguments) => {
  const checkCondition = condition =>
    condition instanceof Function ? condition : value => condition === value;
  
  const flatObj = (obj, root = 'tree') =>
    !(obj instanceof Object) 
      ? {[root]: obj}
      : Object.entries(obj).reduce((acc, [key, val]) => 
          ({ ...acc, ...flatObj(val, root + (obj instanceof Array ? `[${key}]` : `.${key}`)) }), {});
  
  return Object.entries(flatObj(obj)).reduce((acc, [key, val]) => 
    ({ ...acc, ...(arguments.some(condition => checkCondition(condition)(val)) ? {[key]: val} : {}) }), {});                                       
}


