// Description
// Often times as a developer you are given API data that doesn't necessarily conform to a shape that is easily consumable. You have to massage the data in some way so that you can work with it more easily in the environment you need it. In this code kata you will take an object and turn it into an iterable array. The shape of the api object will be like so:

// const timesObject = {
//   monday   : [{ open: '07:00', close: '17:00' }],
//   tuesday  : [{ open: '07:00', close: '17:00' }],
//   wednesday: [{ open: '07:00', close: '17:00' }],
//   thursday : [{ open: '07:00', close: '17:00' }],
//   friday   : [{ open: '07:00', close: '17:00' }],
//   saturday : [],
//   sunday   : [],
// }
// What this data shape is telling us is that the open times for this store are Monday thru Friday from 7am to 5pm. But this may not be so easily consumable on the front end. It would be easier if this was an array object. Your mission, if you choose to accept it, is to massage this data into a shape like so:

// const timesArray = [
//   { 
//     open : '07:00',
//     close: '17:00', 
//     days : ['monday','tuesday', 'wednesday', thursday', 'friday'],
//   }
// ]
// Now create a function called shapeTimesObjectIntoIterableArray that takes an hours object and returns an array of objects.

// Caveats
// If the times object is empty/undefined/null then return an empty array
// P.S. I tell people all the time that code katas is one of the best tools to learn programming because you actually learn programming skills doing them. But some will still ask, "Does it help with learning to develop in the real world?" The answer is yes! But if you need more than that then here is a problem that I had to solve at work. Hopefully you can see the direct correlation between code katas and real life development. I hope this becomes a series where I share real life code katas so that you can peer into the day-to-day problems developers have to face.


// Solution
const shapeTimesObjectIntoIterableArray = (obj, res = []) => {  
  for (const key in obj){    
    obj[key].forEach(({open, close}) => {
      const item = res.find(a=>a.open==open && a.close==close);
      if (item){
        item.days.push(key);
        return;
      }
      res.push({ open, close, days: [key]})
    })    
  }
  return res;  
}
