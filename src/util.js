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

const filterNeighbours = function(side,inputArray){
  totalArray =  Object.keys(createObject(side)).map(x => +x)
  return inputArray.filter(x => totalArray.includes(x));
}

const getNeighboursFirstColumn = function(side,position){
  let p = position, s = side;
  let neighbours = new Array(0).concat(p-s,p-s+1,p+1,p+s,p+s+1);
  return filterNeighbours(side,neighbours);
}

const getNeighboursLastColumn = function(side,position){
  let p = position, s = side;
  let neighbours = new Array(0).concat(p-s-1,p-s,p-1,p+s-1,p+s);
  return filterNeighbours(side,neighbours);
}

const getNeighboursMiddleColumn = function(side,position){
  let p = position, s = side;
  let neighbours = new Array(0).concat(p-s-1,p-s,p-s+1,p-1,p+1,p+s-1,p+s,p+s+1);
  return filterNeighbours(side,neighbours);
}

const convertCoordinateToValue = function(inputArray,bounds){
  let side = bounds.bottomRight[1]-bounds.topLeft[1]+1;
  inputArray = inputArray.map(x => x.filter(y => y<side));
  let inputArrayOfValue = inputArray.map(x => x[0]*side+x[1]+1);
  return {side: side, livePositionValue: inputArrayOfValue}
}

module.exports = {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  filterNeighbours,
  getNeighboursFirstColumn,
  getNeighboursLastColumn,
  getNeighboursMiddleColumn,
  convertCoordinateToValue }
