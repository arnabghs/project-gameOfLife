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


const getLiveNeighboursLength = function(aliveArray,lengthOfSide,position){
  let allNeighbourArray = getAllNeighbours(lengthOfSide,position);
  return allNeighbourArray.filter(x => aliveArray.includes(x)).length;
}

const produceNextGenAliveCells = function(side,object,aliveArray){
  let deadCells = Object.keys(object).map(x => +x).filter(x => !aliveArray.includes(x));
  const aliveNeighbourLength = getLiveNeighboursLength.bind(null,aliveArray,side);
  let aliveCells = aliveArray.filter(x => aliveNeighbourLength(x)==2 || aliveNeighbourLength(x)==3);
  return aliveCells.concat(deadCells.filter(x => aliveNeighbourLength(x) == 3));
}

module.exports = { 
  produceAlive,
  outlineGenerator,
  getAllNeighbours,
  getLiveNeighboursLength,
  produceNextGenAliveCells }
