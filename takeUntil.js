//return slice of array from beginning until callback === true


const takeUntil = function(arr, callback) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    //run callback function on every value and if true, slice at that value
    if (callback(arr[i])) {
      result = arr.slice(0, i);
    }
  }
  return result;
}


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2)
