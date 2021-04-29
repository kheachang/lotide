const findKey = function(obj, callback) {
  //loop through every key in the object
  for (const key in obj) {
    //for every key, check if the value of callback function ==== true
    if (callback(obj[key])) {
      //if callback function === true, return the key
      return key;
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },  
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
