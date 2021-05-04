const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1key = Object.keys(object1);
  let object2key = Object.keys(object2);
  if (object1key.length !== object2key.length) {
    // console.log("returning becus length is not equal");
    return false;
  }
  for (const value of object1key) {
    //test the arrays
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (! eqArrays(object1[value], object2[value])) {
        return false
      }
    } else {
      //if not arrays, test the values
      if (object1[value] !== object2[value]) {
        // console.log(object1[value])
        // console.log(object2[value])
  
        // console.log('false becus val 1 and 2 not equal', value);
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
