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

module.exports = {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  selectSide, 
  selectAlive }
