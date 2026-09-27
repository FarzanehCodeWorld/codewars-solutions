//Description
// In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

// f(a, b)
// where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

// The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

// Your goal is to figure out the correct array.

// The whole procedure is:

// You are given f and the length of the array n.
// Ask f for any element sums you want.
// Create and return the correct array according to the answers.
// The array will always have at least 3 elements.
// ----------------------------------------------------------------------------------------------------------------------------------------------------
//Solution
function guess(f,i){
  let arr = [] // to store all computed values
    for (let b=0; b < i-2; b++ ){
      
      // implementing a simple simultaenous equation solver
      // x + y = 5 (0,1) -> 1
      // x + z = 5 (0,2) -> 2
      // y + z = 6 (1,2) -> 3
      
      // y - z = 0  // 1 - 2
      // y + z = 6

      let eqn_1 = f(b, b+1) // x and y
      let eqn_2 = f(b, b+2) // x and z
      let eqn_3 = f(b+1,b+2) // y and z
      let y = ((eqn_1 - eqn_2) + eqn_3) / 2
      let z = Math.abs((eqn_1 - eqn_2) - eqn_3)  / 2
      let x = eqn_1 - y
      // update the values into the array
      arr[b] = x
      arr[b+1] = y
      arr[b+2] = z
}
  return arr
}
