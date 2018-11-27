const { repeatCharacter,makeHorizontalBorder } = require('./util.js');

const createObject = function(side){
  let sampleObject = {};
  for(index=1; index <= Math.pow(side,2); index++){
    sampleObject[index] = ' ';
  }
  return sampleObject;
}

const produceAlive = function(object,array){
  for(let element of array){
    object[element] = '*';
  }
  return object;
}

module.exports = { createObject,produceAlive }
