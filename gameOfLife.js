const { produceNextGenAliveCells, logSampleSpace} = require('./src/lib.js');
const { createObject,convertCoordinateToValue } = require('./src/util.js');

let aliveArray= process.argv[2].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));
let boundsCoordinate = process.argv[3].split('_').map(x=> x.split(',')).map(x => x.map(y => +y));

let bounds = {};
bounds['topLeft'] = boundsCoordinate[0];
bounds['bottomRight'] = boundsCoordinate[1];


const main = function(){
  let {side, livePositionValue } = convertCoordinateToValue(aliveArray,bounds);
  console.log("\nInitial State\n");
  logSampleSpace(side, livePositionValue);

  let nextGenAliveCells = produceNextGenAliveCells(side,createObject(side),livePositionValue);

  console.log("\nAfter first iteration\n");
  logSampleSpace(side,nextGenAliveCells);
}

main();

