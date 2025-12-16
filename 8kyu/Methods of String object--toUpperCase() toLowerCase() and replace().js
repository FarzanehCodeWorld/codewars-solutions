// *** D E S C R I P T I O N ***//

// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase,
//  and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

//*** S O L U T I O N ***//
function alienLanguage(str){
  let alienString = []
  let arrayOfStrings = str.split(' ')
  for(let i = 0; i< arrayOfStrings.length; i++){
  alienString.push(arrayOfStrings[i].slice(0,-1).toUpperCase() + arrayOfStrings[i].slice(-1).toLowerCase())
}
  return alienString.join(' ')
}