// DESCRIPTION
// Declare an variable which name is stone that cant't be modified.

// The initial value of stone is under below.

// {
//   feature: 'earth',
//   style: {
//     color: 'black'
//   }
// }

// SOLUTION

const stone = Object.freeze({
  feature: 'earth',
  style: Object.freeze({
    color: 'black'
  })
})
