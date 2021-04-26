const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
