// D E S C R I P T I O N

// Given a random non-negative number, 
// you have to return the digits of this number within an array in reverse order

// S O L U T I O I N
function digitize(n) {
  return Array.from(String(n)).reverse().map(n => Number(n))
  
}
