const { 
  logSampleSpace,
  nextGeneration } = require('./src/lib.js');

const { 
  convertCoordinateToValue,
  convertValueToCoordinate } = require('./src/util.js');

let aliveArray= process.argv[2].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));
let boundsCoordinate = process.argv[3].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));

let bounds = {};
bounds['topLeft'] = boundsCoordinate[0];
bounds['bottomRight'] = boundsCoordinate[1];

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
