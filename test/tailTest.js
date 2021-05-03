const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns ['World'] for ['Hello', 'World']", () => {
    assert.deepEqual(tail(['Hello', 'World']), ['World'])
  });

  it("returns new array of length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'World']).length, 1)
  });
  });
  

