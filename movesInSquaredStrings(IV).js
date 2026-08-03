// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Symmetry with respect to the antidiagonal: diag_2_sym (or diag2Sym or diag-2-sym)

// diag_2_sym(s) => "plhd\nokgc\nnjfb\nmiea"
// Counterclockwise rotation 90 degrees: rot_90_counter (or rot90Counter or rot-90-counter)

// rot_90_counter(s)=> "dhlp\ncgko\nbfjn\naeim"
function diag2Sym(strng) {
    let res = []
  let arrayOfSubstrings = strng.split('\n').reverse().map(sub => Array.from(sub))
  let rounds = arrayOfSubstrings[0].length
    for(let i = 0; i<rounds;i++){
      let roundResult = []
     arrayOfSubstrings[i]
      for(let j=0; j<arrayOfSubstrings.length; j++){
        roundResult.push(arrayOfSubstrings[j].pop())
}
      res.push(roundResult.join(''))
      return res
}
    // your code
}
function rot90Counter(strng) {
    // your code
      let res = []
  let arrayOfSubstrings = strng.split('\n').map(sub => Array.from(sub))
  let rounds = arrayOfSubstrings[0].length
    for(let i = 0; i<rounds;i++){
      let roundResult = []
     arrayOfSubstrings[i]
      for(let j=0; j<arrayOfSubstrings.length; j++){
        roundResult.push(arrayOfSubstrings[j].pop())
}
      res.push(roundResult.join(''))
      return res
}
}
