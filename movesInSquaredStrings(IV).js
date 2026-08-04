// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Symmetry with respect to the antidiagonal: diag_2_sym (or diag2Sym or diag-2-sym)

// diag_2_sym(s) => "plhd\nokgc\nnjfb\nmiea"
// Counterclockwise rotation 90 degrees: rot_90_counter (or rot90Counter or rot-90-counter)

// rot_90_counter(s)=> "dhlp\ncgko\nbfjn\naeim"
function diag2Sym(string) {
  let res = []
  let arrayOfSubstrings = string.split('\n').reverse().map(sub => Array.from(sub))
  let rounds = arrayOfSubstrings[0].length
  for (let i = 0; i < rounds; i++) {
    let roundResult = []
    for (let j = 0; j < arrayOfSubstrings.length; j++) {
      roundResult.push(arrayOfSubstrings[j].pop())
    }
    res.push(roundResult.join(''))
  }
  return res // moved outside the loop — this was the bug
}

function rot90Counter(strng) {
  let res = []
  let arrayOfSubstrings = strng.split('\n').map(sub => Array.from(sub))
  let rounds = arrayOfSubstrings[0].length
  for (let i = 0; i < rounds; i++) {
    let roundResult = []
    for (let j = 0; j < arrayOfSubstrings.length; j++) {
      roundResult.push(arrayOfSubstrings[j].pop())
    }
    res.push(roundResult.join(''))
  }
  return res
}

function selfieDiag2Counterclock(string) {
  let originalRows = string.split('\n')
  let diagRows = diag2Sym(string)   // fresh split happens inside diag2Sym
  let rotRows = rot90Counter(string) // fresh split happens inside rot90Counter

  return originalRows
    .map((row, i) => [row, diagRows[i], rotRows[i]].join('|'))
    .join('\n')
}
function oper(fct, s) {
  let result = fct(s)
  return Array.isArray(result) ? result.join('\n') : result
} // "dhlp\ncgko\nbfjn\naeim"
 // or

const rot90Counter = s => s.map((v, i) => [...v].map((_, j) => s[j][i]).join('')).reverse()
const diag2Sym = s => rot90Counter(s).map(v => [...v].reverse().join(''))
const selfieDiag2Counterclock = s => {
  const x = rot90Counter(s)
  const y = diag2Sym(s)
  return s.map((v, i) => v + '|' + y[i] + '|' + x[i])
}
const oper = (fct, s) => fct(s.split('\n')).join('\n')
