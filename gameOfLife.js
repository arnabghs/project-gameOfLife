const { produceNextGenAliveCells, logSampleSpace} = require('./src/lib.js');
const { createObject} = require('./src/util.js');

let lengthOfSide = +process.argv[2];
let aliveArray = process.argv[3].split(',').map(x => +x);

const main = function(){
  console.log("\nInitial State\n");
  logSampleSpace(lengthOfSide,aliveArray);

  let nextGenAliveCells = produceNextGenAliveCells(lengthOfSide,createObject(lengthOfSide),aliveArray);

  console.log("\nAfter first iteration\n");
  logSampleSpace(lengthOfSide,nextGenAliveCells);
}

main();

