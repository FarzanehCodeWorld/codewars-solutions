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
}}

function rot90Counter(strng) {
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

// or 

function diag2Sym(s) {
  let rows = s.split('\n').map(r => Array.from(r));
  let n = rows.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let newRow = [];
    for (let j = 0; j < n; j++) {
      // cell (i, j) in the output comes from cell (n-1-j, n-1-i) in the original
      newRow.push(rows[n - 1 - j][n - 1 - i]);
    }
    result.push(newRow.join(''));
  }

  return result.join('\n');
}

function rot90Counter(s) {
  let rows = s.split('\n').map(r => Array.from(r));
  let n = rows.length;
  let result = [];

  for (let col = n - 1; col >= 0; col--) {
    let newRow = [];
    for (let row = 0; row < n; row++) {
      newRow.push(rows[row][col]);
    }
    result.push(newRow.join(''));
  }

  return result.join('\n');
}

let s = "abcd\nefgh\nijkl\nmnop";
console.log(diag2Sym(s));      // "plhd\nokgc\nnjfb\nmiea"
console.log(rot90Counter(s));  // "dhlp\ncgko\nbfjn\naeim"
