const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      for (const otherKey in object2) {
        if (object1[key] === object2[otherKey]) {
          return true;
        }
      }
    }
  } 
  return false;
};

//TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log('Primitive: ', eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log('Primitive: ', eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log('Array: ', eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log('Array: ', eqObjects(cd, cd2)); // => false
