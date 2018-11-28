const { 
  repeatCharacter,
  makeHorizontalBorder } = require('./util.js');


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

module.exports = { 
  produceAlive,
  outlineGenerator }
