//DESCRIPTION

// Georg Cantor's in one of his proofs used following sequence:

// 1/1 1/2 1/3 1/4 1/5 ...
// 2/1 2/2 2/3 2/4 ...
// 3/1 3/2 3/3 ...
// 4/1 4/2 ...
// 5/1 ...
// There are many ways to order those expressions. In this kata we'll use this approach:



// So sequence is:

// 1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...
// Your task is to return nth element of this sequence.

// Input: n - positive integer (max 268435455)

// Output: string - nth expression of sequence - 'a/b' where a and b are integers.


//SOLUTION
function cantor(n) {

  let m = Math.ceil((Math.sqrt(1 + 8 * n) - 1) / 2);
  let p = m * (m + 1) / 2;
  let d = m % 2 === 0 ? m - 1 - p + n : p - n;

  return (1 + d) + '/' + (m - d);

}
