const readline = require('readline-sync').question;

const repeatCharacter = function(symbol,width,delimeter){
  return new Array(width).fill(symbol).join(delimeter);
}

const makeHorizontalBorder = function(width){
  return "+"+repeatCharacter("---+",width,"");
}

const createObject = function(side){
  let sampleObject = {};
  for(index=1; index <= Math.pow(side,2); index++){
    sampleObject[index] = ' ';
  }
  return sampleObject;
}


const selectSide = function(){
  let side = readline('Enter side of square: ');
  return side;
}

const selectAlive = function(){
  let moves = readline('Enter the position of live cells(use , as seperator): ');
  return moves.split(',');
};

const filterNeighbours = function(side,inputArray){
  totalArray =  Object.keys(createObject(side)).map(x => +x)
  return inputArray.filter(x => totalArray.includes(x));
}

const getNeighboursfirstColumn = function(side,position){
  let p = position, s = side;
  let neighbours = new Array(0).concat(p-s,p-s+1,p+1,p+s,p+s+1);
  return filterNeighbours(side,neighbours);
}

module.exports = {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  selectSide, 
  selectAlive,
  filterNeighbours,
  getNeighboursfirstColumn}
