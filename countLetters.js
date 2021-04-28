const countLetters = (str) => {
  let newStr = str.split(' ').join('');
  let output = {};
  for (const char of newStr) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};