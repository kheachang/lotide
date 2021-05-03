const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3,4], [1,2,3,4,5]), true;
assertArraysEqual([1,2,3,4], [1,2,3]), false;
