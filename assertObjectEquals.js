const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log('✅✅✅ The arrays are equal.');
  } else {
    console.log('🛑🛑🛑 The arrays are not equal.');
  }
};

const eqArrays = (firstArray, secondArray) => {
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
}
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
        // console.log('returning becus eqArrays is false');
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

const assertObjectEqual = (actual, expected) => {
  if (eqObjects(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`
  } else {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}.`
  }
}

/*TEST CASES
const object1 = {a: 1, b: 3, c: 3}
const object2 = {a: 1, b: 3, c: 3}
const object3 = {a: 1, b: 5}

console.log(assertObjectEqual(object1, object2))
*/
