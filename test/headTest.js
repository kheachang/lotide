const head = require('../head');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#head', () => {
  it ('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it('returns 1 for [1]', () => {
    assert.strictEqual(head([1]), 1);
  });

  
})
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");