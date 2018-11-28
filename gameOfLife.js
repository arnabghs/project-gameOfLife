const { 
  produceAlive,
  outlineGenerator } = require('./src/lib.js');

const {
  createObject,
  selectSide, 
  selectAlive } = require('./src/util.js');

let lengthOfSide = +process.argv[2];
let aliveArray = process.argv[3].split(',');

const main = function(){
  let object = createObject(lengthOfSide);
  object = produceAlive(object,aliveArray);
  console.log(outlineGenerator(lengthOfSide,object));
}

main();

