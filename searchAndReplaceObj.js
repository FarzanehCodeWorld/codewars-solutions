// Description
// Given an object with an arbitrary number of properties, any number of which may be objects or arrays, replace all values which are strictly equal to the string: "dynamic" with a given string occurring anywhere in that object or a child object or array.

// Your solution should be recursive.

// Your solution should be "in place" meaning it return the original object, not a copy.

// Your solution should also include some type safety. If a value that isn't an object or array is passed as the first argument, it should just return whatever was passed in.

// Solution
function replaceDynamic(obj, replacement) {
  // Not an object or array (or null): return it as is
  if (obj === null || typeof obj !== "object") return obj;

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    if (value === "dynamic") {
      obj[key] = replacement;            // swap it in place
    } else if (value !== null && typeof value === "object") {
      replaceDynamic(value, replacement); // go deeper (objects and arrays)
    }
  }

  return obj; // the same object, not a copy
}
