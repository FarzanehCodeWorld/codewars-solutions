//**  D e s c r i p t i o n **//

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// **S O L U T I O N**//

function position(letter){
  //Write your own Code!
  let letters = [
    'a','b','c','d','e','f',
    'g', 'h','i','j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y','z'
  ];
  
  let lowerCaseLetter = letter.toLowerCase()
  
  let letterIndex = letters.indexOf(lowerCaseLetter);
  return `Position of alphabet: ${++letterIndex}`
  }