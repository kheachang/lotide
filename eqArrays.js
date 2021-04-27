const assertEqual = (firstArray, secondArray) => {
  if (firstArray === secondArray) {
    return console.log(`✅✅✅ Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
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

// console.log(eqArrays([1,5,3], [1,2,3]))