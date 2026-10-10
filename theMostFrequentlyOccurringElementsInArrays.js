Input:
A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

// Output:
// An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

// Example
// For input:

// { "temperature": [
//     [15,17,19,21,21,21,20,16],
//     [16,17,22,22,22,22,20,16],
//     [12,17,19,20,20,20,20,18],
//     [14,15,19,19,20,22,18,17],
//     [15,17,24,24,24,20,20,20]
//   ]
// }
// The ouput should be [21,22,20,19,20]:

// [15,17,19,21,21,21,20,16]: 21 is the most frequent in 1st array
// [16,17,22,22,22,22,20,16]: 22 is the most frequent in 2nd array
// [12,17,19,20,20,20,20,18]: 20 is the most frequent in 3rd array
// [14,15,19,19,20,22,18,17]: 19 is the most frequent in 4th array
// [15,17,24,24,24,20,20,20]: 24 and 20 appear 3 times each in 5th array so 20 is included in the output as the last 20 appears later than the last 24.

function getMostFrequent(json) {
  return json["temperature"]
    .map(arr => arr.sort(
      (a, b) => arr.filter(el => a === el).length - arr.filter(el => b === el).length)
    .pop());
}
