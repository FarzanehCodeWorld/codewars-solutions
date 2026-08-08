// Description:
// Write a regexp to validate a key-value string in the format:

// name:xxx,age:111,skill:xxx
// Rules
// name/age/skill may be in any order, example:

// 'name:xxx,age:111,skill:xxx'
// 'skill:xxx,name:xxx,age:111'
// 'name:xxx,skill:xxx,age:111'
// name/skill have to be made up of letters ([A-Za-z]+)

// age has to be a number (0 is valid) ([0-9]+)

// there can be no leading or trailing commas ,

// name/age/skill must be present exactly once each

// Have fun :)

let n = 'name:[A-Za-z]+', s = 'skill:[A-Za-z]+', a = 'age:[0-9]+'
let reg = RegExp([[n,s,a],[n,a,s],[a,n,s],[a,s,n],[s,a,n],[s,n,a]].map(p=>'(^'+p.join(',')+'$)').join('|'))
