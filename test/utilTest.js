const assert = require('assert').deepEqual;

const {repeatCharacter,makeHorizontalBorder} = require('../src/util.js');

describe ("Test for util",function(){
  describe("test for repeatCharacter",function(){
    it('with 0 width should return empty string',function(){
      assert(repeatCharacter("",0,""),"");
    });
    it('with non zero width,should return the given char that many times with the given delimeter',function(){
      assert(repeatCharacter("*",5,""),"*****");
      assert(repeatCharacter("a",5,"\n"),"a\na\na\na\na");
    });
  });
  describe("test for makeHorizontalBorder",function(){
    it('with 0 width should only return the hardcoded +',function(){
      assert(makeHorizontalBorder(0),"+");
    });
    it('with n width should return the unit string n times connected as a string',function(){
      assert(makeHorizontalBorder(5),"+---+---+---+---+---+");
    });
  });
});
