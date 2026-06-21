// D E S C R I P T I O N
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

// For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

// In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

// If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

// Examples
// 1221      -->  [22, 1221]
// 34322122  -->  [22, 212, 343, 22122]
// 1001331   -->  [33, 1001, 1331]
// 1294      -->  "No palindromes found"
// "1221"    -->  "Not valid"

//SOLUTION
function palindrome(num) {
 if (!Number.isInteger(num) || num<0) return "Not valid";
 const isPalindrome = num => String(num) === [...String(num)].reverse().join('');
 const res = [];

 for (let i=0; i<=String(num).length; i++) {
   for (let j=i+2; j<=String(num).length; j++) {
     let p = parseInt((''+num).substring(i,j));
     if (p>9 && isPalindrome(p)) res.push(p);
   }
 }
 
 return res.length ? [...new Set(res)].sort((a,b) => a-b) : 'No palindromes found';
}
