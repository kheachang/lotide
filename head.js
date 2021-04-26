const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  return console.log(arr[0]);
}

/*
TEST CASES:

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/