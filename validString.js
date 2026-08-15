// Description:
// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

// Task
// Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

// For example:

// dictionary: ["code", "wars"]

// s1:         "codewars" =>  true  -> match 'code', 'wars'
// s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
// One word from the dictionary can be used several times.

```
function validWord(dict, word) {
  if (word === '') return true;
  for (let i = 0; i < word.length; ++i) {
    const first = word.slice(0, i);
    const second = word.slice(i);
    if (dict.indexOf(first) >= 0 && validWord(dict, second)) return true;
    if (dict.indexOf(second) >= 0 && validWord(dict, first)) return true;
  }
  return false;
} 
```

can yuu explain it to me
