const assert = require('assert').deepEqual;

const {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  filterNeighbours,
  getNeighboursFirstColumn,
  getNeighboursLastColumn,
  getNeighboursMiddleColumn} = require('../src/util.js');

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
  describe("test for getNeighboursFirstColumn",function(){
   it('for side 0 should return empty array',function(){
      assert(getNeighboursFirstColumn(0,1),[]);
    });
    it('for different size an position array length will depend on the position',function(){
      assert(getNeighboursFirstColumn(4,1),[2,5,6]);
      assert(getNeighboursFirstColumn(4,9),[5,6,10,13,14]);
    }); 
  });
  describe("test for getNeighboursLastColumn",function(){
   it('for side 0 should return empty array',function(){
      assert(getNeighboursLastColumn(0,1),[]);
    });
    it('for different size an position array length will depend on the position',function(){
      assert(getNeighboursLastColumn(4,4),[3,7,8]);
      assert(getNeighboursLastColumn(4,12),[7,8,11,15,16]);
    }); 
  });
  describe("test for getNeighboursMiddleColumn",function(){
   it('for side 0 should return empty array',function(){
      assert(getNeighboursMiddleColumn(0,1),[]);
    });
    it('for different size an position array length will depend on the position',function(){
      assert(getNeighboursMiddleColumn(4,6),[1,2,3,5,7,9,10,11]);
      assert(getNeighboursMiddleColumn(4,11),[6,7,8,10,12,14,15,16]);
    }); 
  });
});
