const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //for every item, run the callback function and push into a new array
    results.push(callback(item));
  }
  return results;
}

// TEST:
// console.log(map(words, word => word[0])) 