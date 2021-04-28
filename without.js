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
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] !== secondArray) {
        result.push(firstArray[i]);
      }
    }
  }
  return result;
}

//push firstArray 
//if secondArray is not present in the entire firstArray 
//not in the array command

console.log(without(["1", "2", "3"], [1, 2, "3"]));
//output: ["1", "2"]