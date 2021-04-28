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

//return an array with only the middle element(s) of the provided array.

function middle (arr) {
  let output = [];
  let index = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    output;
  };
  if (arr.length % 2 !== 0) {
    output.push(arr[index]);
  }
  if (arr.length % 2 === 0) {
    output.push(arr[index-1]);
    output.push(arr[index]);
  }
  return output;
}
