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

module.exports = middle;