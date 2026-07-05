// Description:
// Task
// Write a function that accepts a number n(n>0), return an array that contains the continuous parts of odd or even digits.

// Please don't worry about digit 0, it won't appear ;-)

// Examples
// 123  ===>  [1,2,3]

// 223  ===>  [22,3]

// 111  ===>  [111]

// 13579  ===>  [13579]

// 135246  ===>  [135,246]

// 123456  ===>  [1,2,3,4,5,6]


function splitOddAndEven(n) {
  n = n.toString().split('');
  
  var array = [];
  var result = '';
  var lastEven = null;
  
  for (var i in n)
  {
    var even = n[i]%2 === 0;
    
    if (even === lastEven)
      result += n[i].toString();
    else
    {
      if (lastEven !== null)
        array.push(parseInt(result));
      
      lastEven = even;
      result = n[i].toString();
    }
  }
  
  array.push(parseInt(result));
  
  return array;
}
