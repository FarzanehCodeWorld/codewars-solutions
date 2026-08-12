// Description:
// The Bus Passenger Puzzle
// Description
// In this puzzle, you will take on the role of a bus passenger seeking the perfect seat. As you navigate through a variety of seating arrangements, your objective is to find the most suitable spot for yourself amidst occupied and empty seats.

// Task
// As you board the bus from the bottom left corner, you are presented with a specific seating layout. The bus features a passageway running vertically from the front (driver's side) to the back of the bus, separating the left and right seating areas. Your mission is to analyze this arrangement, identify an available seat, and return the updated layout with your chosen seat marked as "O".

// Input
// A string representation of the bus seating configuration.
// Each row consists of 4 seats: 2 on the left side and 2 on the right side.
// Empty seats are represented by "-", while occupied seats are denoted by "x".
// Rows are separated by newline characters "\n".
// The passageway in the middle of the bus is represented by two white spaces "  ".
// Output
// Return the modified seating arrangement as a string, with your selected seat indicated by "O".
// Bus Specs
// A bus has between 3 and 30 rows of seats.
// There are 2 seats on either side of a row.
// The bus will never be full, but can be empty.
// Passenger Characteristics (Puzzle Element)
// The passenger boarding the bus always follows the same logic when choosing a seat. This logic takes into account various preferences, which may include:

// Preference for front or back of the bus
// Preference for left or right side
// Desire for proximity to or distance from other (nearby) passengers
// Preference for window or aisle seats
// Any other relevant factors ...
// Your task is to deduce these preferences through the test cases and implement them in your solution.

// Example
// Input:

// -x  --
// --  --
// --  x-
// --  --
// Output:

// -x  --
// O-  --
// --  x-
// --  --
// Good luck, have fun!

function sit(bus) {
  const a1 = bus.replace(/--  --/m, 'O-  --');
  const a2 = bus.replace(/--/m, (_,i) => i%7 == 4 ? '-O' : 'O-');
  const a3 = bus.replace(/x-(?= )|(?<= )-x/m, (_,i) => i %7 == 4 ? 'Ox' : 'xO');
  
  return a1 != bus ? a1 : a2 != bus ? a2
       : a3 != bus ? a3 : bus.replace(/-/, 'O');
}
