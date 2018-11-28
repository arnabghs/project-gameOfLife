const { 
  produceAlive,
  outlineGenerator } = require('./src/lib.js');

const {
  createObject,
  selectSide, 
  selectAlive } = require('./src/util.js');

const main = function(){
  let sideOfSquare = +selectSide();
  let object = createObject(sideOfSquare);
  object = produceAlive(object, selectAlive());
  console.log(outlineGenerator(sideOfSquare,object));
}

main();

