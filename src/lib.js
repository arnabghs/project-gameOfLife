const { repeatCharacter,makeHorizontalBorder } = require('./util.js');

const createObject = function(side){
  let sampleObject = {};
  for(index=1; index <= Math.pow(side,2); index++){
    sampleObject[index] = ' ';
  }
  return sampleObject;
}

module.exports = { createObject }
