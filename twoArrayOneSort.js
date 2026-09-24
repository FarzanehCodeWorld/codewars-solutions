// Description
// Imagine two arrays/lists where elements are linked by their positions in the array. For example:

// HowMany = [ 1   ,   6  ,  5  ,   0  ];
// Type = ['house', 'car','pen','jeans'];
// Means I have 1 house, 6 cars,5 pens and 0 jeans.

// Now if we sort one array we lose the connectivity. The goal is to create a sorting function that keeps the position link linkedSort(arrayToSort,linkedArray,compareFunction). So for every element that moves in arrayToSort(HowMany in the example), the corresponding element in linkedArray(Type in the example) needs to move similarly.

// For example in Javascript:

// //INPUT
// HowMany = [ 1   ,   6  ,  5  ,   0  ];
// Type = ['house', 'car','pen','jeans'];

// //SORT
// res = linkedSort(HowMany,Type,function(a,b){return a-b;})

// //OUTPUT
// HowMany === res === [ 0   ,   1   ,  5  ,  6  ];
// Type       ===     ['jeans','house','pen','car'];
// linkedSort(...) return the "arrayToSort" sorted only.

// If no compare function is provided you should handle like an alphabetical sorting would do, e.g:

// [-71,-6,35,0].sort() ===  [-6,-71,0,35] != [-71,-6,0,35]
// Note: it is assumed that array are same length.
//Solution
function linkedSort(arrayToSort,linkedArray,compareFunction) {
  const paired = arrayToSort.map((value,i) => [value,linkedArray[i]]);
                                 
  const compare = compareFunction || function(a,b) {
    const sa = String(a), sb= String(b);
    return sa < sb ? -1 : sa > sb ? 1 : 0;
  };
  paired.sort((pairA,pairB) => compare(pairA[0],pairB[0]));

  console.log(paired)
  for(let i=0; i<paired.length; i++) {
    arrayToSort[i] = paired[i][0]
    linkedArray[i] = paired[i][1]
}
  return arrayToSort;
}
