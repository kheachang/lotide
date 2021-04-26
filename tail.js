const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};
const tail = (arr) => {
  return arr.slice(1);
};

//TEST CASE:
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
