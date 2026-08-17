// Description:
// You are given a string and a transformation pattern (an array of operations). Your task is to apply the operations in order to the string and return the final result.

// Each operation in the pattern is one of:

// "U" → convert the string to uppercase

// "L" → convert the string to lowercase

// "R" → reverse the string

// "D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")

// stringTransformation("abcd", ["U","R"]) // "DCBA"
// // "abcd" → "ABCD" → "DCBA"

// stringTransformation("abc", ["D","L"])  // "aabbcc"
// // "abc" → "aabbcc" → "aabbcc" (lowercase already applied)

// stringTransformation("AbCd", ["L","R"]) // "dcba"
// // "AbCd" → "abcd" → "dcba"
// Note:

// Input string length is 1 <= n <= 10^5, length of transformations is 0 <= n <= 10^5, in all tests is guaranteed that the string will be not longer than 10^8.

function stringTransformation(string, transformations) {
  let shouldReverse = false;
  let duplicateCount = 0;
  let finalCase = null;

  for (const transformation of transformations) {
    if (transformation === "R") {
      shouldReverse = !shouldReverse;
    } else if (transformation === "D") {
      duplicateCount++;
    } else {
      finalCase = transformation;
    }
  }

  let source = finalCase === "U"
    ? string.toUpperCase()
    : finalCase === "L"
      ? string.toLowerCase()
      : string;

  if (shouldReverse) {
    source = [...source].reverse().join("");
  }

  const repeatCount = 2 ** duplicateCount;

  if (repeatCount === 1) {
    return source;
  }

  let result = "";

  for (const character of source) {
    result += character.repeat(repeatCount);
  }

  return result;
}
