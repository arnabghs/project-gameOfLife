const assert = require('assert').deepEqual;

const {createObject} = require('../src/lib.js');

describe ("Test for lib",function(){
  describe("test for createObject",function(){
    it('should return empty object for input 0',function(){
      assert(createObject(0),{});
    });
    it('for non-zero input should return an object of length equal to input\'s square',function(){
      assert(createObject(2),{1:' ',2:' ',3:' ',4:' '});
    });
  });
});



