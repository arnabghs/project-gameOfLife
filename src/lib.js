const { 
  repeatCharacter,
  createObject,
  makeHorizontalBorder,
  getNeighboursFirstColumn,
  getNeighboursLastColumn,
  getNeighboursMiddleColumn,
  convertValueToCoordinate,
  convertCoordinateToValue } = require('./util.js');


const produceAlive = function(object,array){
  for(let element of array){
    object[element] = '*';
  }
  return object;
}

const outlineGenerator = function(length,width,object){
  let outline = makeHorizontalBorder(length)+"\n";
  let height = 0;
  let startingIndex = 1;
  let lastIndex = length;
  while (height < width){
    let line = '';
    for(let index=startingIndex; index<=lastIndex; index++){
      line += '| ' + object[index] + ' ';
    };
    line = line + '|' + '\n';
    outline += line;
    height++;
    startingIndex += length;
    lastIndex += length;
  }
  outline += makeHorizontalBorder(length);
  return outline;
}

const logSampleSpace = function(length,width,aliveArray){
  let emptyObject = createObject(length,width);
  let presentObject = produceAlive(emptyObject,aliveArray);
  console.log(outlineGenerator(length,width,presentObject));
}


const getAllNeighbours = function(length,width,position){
  if((position-1)%length == 0) return getNeighboursFirstColumn(length,width,position);
  if(position % length == 0) return getNeighboursLastColumn(length,width,position);
  return getNeighboursMiddleColumn(length,width,position);
}

const getLiveNeighboursLength = function(aliveArray,length,width,position){
  let allNeighbourArray = getAllNeighbours(length,width,position);
  return allNeighbourArray.filter(x => aliveArray.includes(x)).length;
}


const produceNextGenAliveCells = function(length,width,object,aliveArray){
  let deadCells = Object.keys(object).map(x => +x).filter(x => !aliveArray.includes(x));
  const aliveNeighbourLength = getLiveNeighboursLength.bind(null,aliveArray,length,width);
  let aliveCells = aliveArray.filter(x => aliveNeighbourLength(x)==2 || aliveNeighbourLength(x)==3);
  return aliveCells.concat(deadCells.filter(x => aliveNeighbourLength(x) == 3));
}

const getModifiedCurrGen = function (currGeneration,bounds){
  return currGeneration.map(function(x){
    x[0] = x[0] - bounds.topLeft[0];
    x[1] = x[1] - bounds.topLeft[1];
    return x;
  })
}

const getModifiedNextGen = function (currGeneration,bounds){
  return currGeneration.map(function(x){
    x[0] = x[0] + bounds.topLeft[0];
    x[1] = x[1] + bounds.topLeft[1];
    return x;
  })
}


const nextGeneration = function(currGeneration,bounds) {
  let modifiedCurrGen =  getModifiedCurrGen(currGeneration,bounds);
  let {length,width,livePositionValue } = convertCoordinateToValue(modifiedCurrGen,bounds);
  let nextGenValues = produceNextGenAliveCells(length,width,createObject(length,width),livePositionValue).sort((a,b) => a-b);
  let nextGenCoordinates = convertValueToCoordinate(nextGenValues,length);
  return getModifiedNextGen(nextGenCoordinates,bounds);
}

module.exports = { 
  produceAlive,
  getAllNeighbours,
  getLiveNeighboursLength,
  produceNextGenAliveCells,
  logSampleSpace,
  getModifiedCurrGen,
  getModifiedNextGen,
  nextGeneration }
