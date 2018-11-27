const assert = require('assert').deepEqual;

const {repeatCharacter} = require('../src/util.js');

describe ("Test for lib",function(){
  describe("test for repeatCharacter",function(){
    it('with 0 width should return empty string',function(){
      assert(repeatCharacter("",0,""),"");
    });
    it('with non zero width,should return the given char that many times with the given delimeter',function(){
      assert(repeatCharacter("*",5,""),"*****");
      assert(repeatCharacter("a",5,"\n"),"a\na\na\na\na");
    });
  })
})
