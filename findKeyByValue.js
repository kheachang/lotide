const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  for (const genre in obj) {
    if (obj[genre] === value) {
      return genre;
    }
  }
}

//TEST CASE:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

