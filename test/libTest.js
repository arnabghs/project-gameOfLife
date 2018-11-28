const assert = require('assert').deepEqual;

const {
  produceAlive} = require('../src/lib.js');

describe ("Test for lib",function(){
    describe("test for produceAlive",function(){
    it('for empty object and empty array should return empty object',function(){
      assert(produceAlive({},[]),{});
    });
    it('for empty array, should return the object  unchanged',function(){
      assert(produceAlive({1:' ',2:' '},[]),{1:' ',2:' '});
    });
   it('for empty object and non-empty array should return an object of array length',function(){
      assert(produceAlive({},[1,2]),{1:"*",2:"*"});
    }); 
    it('for non-zero input should return an object of same length',function(){
      assert(produceAlive({1:' ',2:' ',3:' '},[1,3]),{1:'*',2:' ',3:'*'});
    });
  });
});

