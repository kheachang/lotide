const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};const countOnly = function(allItems, itemsToCount) {

  let results = {};
  //loop through each item in firstName object
  for (const item of allItems) { 
    //if itemsToCount has a key called Karl,
    if (itemsToCount[item]) {
      //if results has a key called Karl,
      if (results[item]) {
        //add 1 to the value of key Karl
        results[item] += 1;
      } else {
        //if it does not have a key called Karl already, add 1 to that key 
        results[item] = 1;
      }
    }
  }
  return results;
};

// TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
