const { 
  repeatCharacter,
  makeHorizontalBorder,
  getNeighboursFirstColumn,
  getNeighboursLastColumn,
  getNeighboursMiddleColumn } = require('./util.js');


const produceAlive = function(object,array){
  for(let element of array){
    object[element] = '*';
  }
  return object;
}

const outlineGenerator = function(side,object){
  let outline = makeHorizontalBorder(side)+"\n";
  let height = 0;
  let startingIndex = 1;
  let lastIndex = side;
  while (height < side){
    let line = '';
    for(let index=startingIndex; index<=lastIndex; index++){
      line += '| ' + object[index] + ' ';
    };
    line = line + '|' + '\n';
    outline += line;
    height++;
    startingIndex += side;
    lastIndex += side;
  }
  outline += makeHorizontalBorder(side);
  return outline;
}

const getAllNeighbours = function(side,position){
  if((position-1)%side == 0) return getNeighboursFirstColumn(side,position);
  if(position % side == 0) return getNeighboursLastColumn(side,position);
  return getNeighboursMiddleColumn(side,position);
}


const getLiveNeighbours = function(aliveArray,position,lengthOfSide){
  let allNeighbourArray = getAllNeighbours(lengthOfSide,position);
  return allNeighbourArray.filter(x => aliveArray.includes(x));
}

module.exports = { 
  produceAlive,
  outlineGenerator,
  getAllNeighbours,
  getLiveNeighbours}
