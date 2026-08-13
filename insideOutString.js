
Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

Words will be separated by exactly one space and there will be no leading or trailing spaces.



//Solution
function insideOut(x) {
  let words = x.split(' ');

  return words.map(word => {
    let middle = Math.floor(word.length / 2);

    if (word.length % 2 === 0) {
      let firstHalf = word.slice(0, middle);
      let secondHalf = word.slice(middle);

      return firstHalf.split('').reverse().join('') +
             secondHalf.split('').reverse().join('');
    } else {
      let firstHalf = word.slice(0, middle);
      let middleLetter = word[middle];
      let secondHalf = word.slice(middle + 1);

      return firstHalf.split('').reverse().join('') +
             middleLetter +
             secondHalf.split('').reverse().join('');
    }
  }).join(' ');
}
