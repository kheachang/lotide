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

const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log('✅✅✅ The arrays are equal.');
  } else {
    console.log('🛑🛑🛑 The arrays are not equal.');
  }
};

function without (firstArray, secondArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    let isInBothArrs = false;
    for (let j = 0; j < secondArray.length; j++) {
      if (secondArray[j] === firstArray[i]) {
        //if values in second array and first array are the same, update boolean to true
        isInBothArrs = true
      }
    }
    //at the end of each loop for the second array, if boolean was never updated, none of the values matched. 
    if (isInBothArrs == false) {
      result.push(firstArray[i]);
    }
  }
  return result;
}

