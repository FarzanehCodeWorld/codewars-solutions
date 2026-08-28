// Description
// All Unix user know the command line history. This one comes with a set of useful commands know as the bang command.

// For more information about the history command line you can take a look at:

// The man page -> simply type man history in your terminal.
// The online man page here.
// And for more information about the bang command you can read this article
// For this 4th kata we will explore the !string command, according to the man page this one refer to command the most recent command preceding the current position in the history list starting with string.

// In this kata you should complete a function that take in an string that correspond to s, and an history with the following format:

//   1  cd /pub
//   2  more beer
//   3  lost
//   4  ls 
//   5  touch me 
//   6  chmod 000 me 
//   7  more me
//   8  history
// and that should return the most recent command line that start with s, for example with s="more" and the above history it should return more me. If user ask for a s without any know entry for example s=mkdir here, the function should return !mkdir: event not found.

// Solution
Note: Lot of the command line comes form some geeky t-shirt and form this excellent page.
  const bangStartString = (s, history) =>
  history.split(/\n/).map(val => val.replace(/\s+\d+\s+/, ``)).reverse().find(val => val.startsWith(s)) || `!${s}: event not found`;
