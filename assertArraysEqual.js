const eqArrays = require('./eqArrays');

const assertArraysEqual = (firstArray, arr2) => {
  if (eqArrays(firstArray, arr2) === true) {
    console.log('✅✅✅ The arrays are equal.');
  } else {
    console.log('🛑🛑🛑 The arrays are not equal.');
  }
};

module.exports = assertArraysEqual;