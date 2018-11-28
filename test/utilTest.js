const assert = require('assert').deepEqual;

const {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  filterNeighbours,
  getNeighboursfirstColumn} = require('../src/util.js');

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
  describe("test for createObject",function(){
    it('should return empty object for input 0',function(){
      assert(createObject(0),{});
    });
    it('for non-zero input should return an object of length equal to input\'s square',function(){
      assert(createObject(2),{1:' ',2:' ',3:' ',4:' '});
    });
  });
  describe("test for filterNeighbours",function(){
    it('for empty array should return empty array',function(){
      assert(filterNeighbours(2,[]),[]);
    });
    it('for one or multielements array should return array of same or less length',function(){
      assert(filterNeighbours(3,[2,-1,5,6,0]),[2,5,6]);
    });
  });
  describe("test for getNeighboursfirstColumn",function(){
   it('for side 0 should return empty array',function(){
      assert(getNeighboursfirstColumn(0,1),[]);
    });
    it('for different size an position array length will depend on the position',function(){
      assert(getNeighboursfirstColumn(4,1),[2,5,6]);
      assert(getNeighboursfirstColumn(4,9),[5,6,10,13,14]);
    }); 
  });
});
