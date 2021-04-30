const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log('✅✅✅ The arrays are equal.');
  } else {
    console.log('🛑🛑🛑 The arrays are not equal.');
  }
};

const assertObjectEqual = (actual, expected) => {
  for (const actualKey in actual) {
    for (const expectedKey in expected) {
      //return false: if the key are not the same 
      //return false: if the values are not the same
      if (actualKey !== expectedKey) {
        return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`
      }
    }
  }
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}.`
}

const object1 = {a: 1, b: 3, c: 3}
const object2 = {a: 1, b: 3, c: 3}
const object3 = {a: 1, b: 5, c: 3}

console.log(assertObjectEqual(object1, object2))
// || 
// actual['actualKey'] !== expected['expectedKey'] || 