const eqArrays = function(firstArray, arr2) {
  if (firstArray.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;


