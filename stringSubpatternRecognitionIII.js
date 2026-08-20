
// Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

// Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

// For example:

// "a" ==> "a"; // no repeated pattern, just one character
// "aaaa" ==> "a"; // just one character repeated
// "abcd" ==> "abcd"; // base pattern equals the string itself, no repetitions
// "babababababababa" ==> "ab"; // remember to return the base string sorted
// "bbabbaaabbaaaabb" ==> "ab"; // same as above, just shuffled


function hasSubpattern(string) {
  const freq = {};
  for (const char of string) {
    freq[char] = (freq[char] || 0) + 1;
  }
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const g = Object.values(freq).reduce(gcd);
  return Object.keys(freq).sort().map(c => c.repeat(freq[c] / g)).join('');
}
