// Description:
// What is an Isomorph?
// An isomorph is a string where the letters follow the exact same structural pattern. For example, look and meet are isomorphs because they both follow the pattern ABBC.

// Quick Summary
// Using the pool of characters from letters, recreate the exact structural fingerprint found in original.

// (original, letters) -> solution

// Step-by-Step Examples
// Example 1: ("ggd", "vcv") -> "vvc"

// Example 2: ("aba", "xtt") -> "txt"

// Example 3 (The Dilemma): ("zyxx", "acba") -> "cbaa" But wait, ("zyxx", "acba") -> "bcaa" is also a valid structural match!

// When different letters share the exact same frequency count, multiple solutions are possible because the letters are able to trade positions.

// The Tie-Breaker Rule: Solve this dilemma by sorting those competing letters alphabetically before assigning them. Therefore, the only correct solution is: ("zyxx", "acba") -> "bcaa"

// Rules of Engagement
// Frequency Matching: Letters must pair with target characters of identical frequency.
// Order of Appearance: Map remaining characters based on their original left-to-right appearance.
// Alphabetical Tie-Breaker: Sort same-frequency pool letters alphabetically.
// Invalid States: Return null if a match is mathematically impossible (e.g., length mismatch).
// Input Constraints
// Both inputs will contain only lowercase alphabetic letters (a-z).
// letters is the only input that might have the wrong length, missing characters, or a distribution that cannot mathematically map to original.


function isomorphReproduced(original, letters) {
  if (original.length !== letters.length) return null;

  const profile = s => [...s].reduce((m, c) => (m[c] = (m[c] || 0) + 1, m), {});
  const need = profile(original);
  const have = profile(letters);

  const bucket = {};
  for (const c in have) (bucket[have[c]] ??= []).push(c);
  for (const f in bucket) bucket[f].sort().reverse();

  const map = {};
  for (const c of original)
    if (!(c in map)) {
      const pile = bucket[need[c]];
      if (!pile?.length) return null;
      map[c] = pile.pop();
    }

  return [...original].map(c => map[c]).join("");
}

