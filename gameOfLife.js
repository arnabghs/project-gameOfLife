const { produceNextGenAliveCells,
  logSampleSpace,
  selectAliveWithinBound,
  getModifiedCurrGen,
  getModifiedNextGen } = require('./src/lib.js');

const { createObject,
  convertCoordinateToValue,
  convertValueToCoordinate } = require('./src/util.js');

let aliveArray= process.argv[2].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));
let boundsCoordinate = process.argv[3].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));

let bounds = {};
bounds['topLeft'] = boundsCoordinate[0];
bounds['bottomRight'] = boundsCoordinate[1];

const nextGeneration = function(currGeneration,bounds) {
  let liveCellsInBound = selectAliveWithinBound(currGeneration,bounds);
  let modifiedCurrGen =  getModifiedCurrGen(liveCellsInBound,bounds);
  let {length,width,livePositionValue } = convertCoordinateToValue(modifiedCurrGen,bounds);
  let inputValueArray = produceNextGenAliveCells(length,width,createObject(length,width),livePositionValue);
  let nextGenCoordinates = convertValueToCoordinate(inputValueArray,length);
  return getModifiedNextGen(nextGenCoordinates,bounds);
}

const main = function(){
  let {length,width,livePositionValue } = convertCoordinateToValue(aliveArray,bounds)
  console.log("\nInitial State\n");
  logSampleSpace(length,width,livePositionValue);

  let nxtGenLiveCells = nextGeneration(aliveArray,bounds);
  let nxtGenLivePosition = convertCoordinateToValue(nxtGenLiveCells,bounds).livePositionValue;

  console.log("\nAfter first iteration\n");
  logSampleSpace(length,width,nxtGenLivePosition);
}

main();
