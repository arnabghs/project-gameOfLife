const assert = require('assert').deepEqual;

const {
  produceAlive,
  getAllNeighbours,
  getLiveNeighboursLength,
  produceNextGenAliveCells } = require('../src/lib.js');

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
  describe("test for getAllNeighbours",function(){
    it('for side 0 should return empty array',function(){
      assert(getAllNeighbours(0,1),[]);
    });
    it('for different sizes array length will depend on the position',function(){
      assert(getAllNeighbours(4,6),[1,2,3,5,7,9,10,11]);
      assert(getAllNeighbours(4,11),[6,7,8,10,12,14,15,16]);
      assert(getAllNeighbours(3,3),[2,5,6]);
      assert(getAllNeighbours(3,4),[1,2,5,7,8]);
      assert(getAllNeighbours(3,5),[1,2,3,4,6,7,8,9]);
    });
  });
  describe("test for getLiveNeighboursLengthLength",function(){
    it('for empty alive array should return 0 length',function(){
      assert(getLiveNeighboursLength([],3,1),0);
    });
    it('for different sizes of alive array, length will be less or equal',function(){
      assert(getLiveNeighboursLength([1,2,3,4],3,1),2);
      assert(getLiveNeighboursLength([1,2,3],3,4),2);
      assert(getLiveNeighboursLength([3,4,5,6],4,7),3);
      assert(getLiveNeighboursLength([4,8,12],4,16),1);
    });
  });
  describe('test for produceNextGenAliveCells',function(){
    it('for empty alive array it should return empty array',function(){
      assert(produceNextGenAliveCells(2,{'1':' ','2':' ','3':' ','4':' '},[]),[]);
    })
    it('for non-empty alive array the length of returned array will vary',function(){
      assert(produceNextGenAliveCells(2,{'1':'*','2':' ','3':' ','4':' '},[1]),[]);
      assert(produceNextGenAliveCells(2,{'1':'*','2':'*','3':' ','4':' '},[1,2]),[]);
      assert(produceNextGenAliveCells(2,{'1':'*','2':'*','3':'*','4':' '},[1,2,3]),[1,2,3,4]);
      assert(produceNextGenAliveCells(2,{'1':'*','2':'*','3':'*','4':'*'},[1,2,3,4]),[1,2,3,4]);
    });
  });
});

