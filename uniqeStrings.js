// Description:
// Given a string that contains only letters, you have to find out the number of unique strings (including the string itself) that can be produced by re-arranging the letters of the string. Strings are case insensitive.

// HINT: Generating all the unique strings and calling length on that isn't a great solution for this problem. It can be done a lot faster...

// Examples
// uniqCount("AB") = 2n      // "AB", "BA"
// uniqCount("ABC") = 6n     // "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"
// uniqCount("ABA") = 3n     // "AAB", "ABA", "BAA"
// uniqCount("ABBb") = 4n    // "ABBB", "BABB", "BBAB", "BBBA"
// uniqCount("AbcD") = 24n   // "ABCD", etc.

// Note that you should return a BigInt, not a Number
function uniqCount(str) {
  const s = str.toLowerCase();

  // Count frequency of each letter
  const freq = {};
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0n) + 1n;
  }

  // BigInt factorial helper
  function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = BigInt(s.length);
  let numerator = factorial(n);
  let denominator = 1n;

  for (const letter in freq) {
    denominator *= factorial(freq[letter]);
  }

  return numerator / denominator;
}
