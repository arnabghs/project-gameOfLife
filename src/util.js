
const repeatCharacter = function(symbol,width,delimeter){
  return new Array(width).fill(symbol).join(delimeter);
}

const makeHorizontalBorder = function(width){
  return "+-"+repeatCharacter("--",width,"")+"+";
}

const createObject = function(length,width){
  let sampleObject = {};
  for(index=1; index <= length*width; index++){
    sampleObject[index] = ' ';
  }
  return sampleObject;
}

const filterNeighbours = function(length,width,inputArray){
  totalArray =  Object.keys(createObject(length,width)).map(x => +x)
  return inputArray.filter(x => totalArray.includes(x));
}

const getNeighboursFirstColumn = function(length,width,position){
  let p = position, l = length;
  let neighbours = new Array(0).concat(p-l,p-l+1,p+1,p+l,p+l+1);
  return filterNeighbours(length,width,neighbours);
}

const getNeighboursLastColumn = function(length,width,position){
  let p = position, l = length;
  let neighbours = new Array(0).concat(p-l-1,p-l,p-1,p+l-1,p+l);
  return filterNeighbours(length,width,neighbours);
}

const getNeighboursMiddleColumn = function(length,width,position){
  let p = position, l = length;
  let neighbours = new Array(0).concat(p-l-1,p-l,p-l+1,p-1,p+1,p+l-1,p+l,p+l+1);
  return filterNeighbours(length,width,neighbours);
}

const convertCoordinateToValue = function(inputArray,bounds){
  let length = bounds.bottomRight[1]-bounds.topLeft[1]+1;
  let width = bounds.bottomRight[0]-bounds.topLeft[0]+1;
  inputArray = inputArray.map(x => x.filter(y => y<length));
  let inputArrayOfValue = inputArray.map(x => x[0]*length+x[1]+1);
  return {length: length, width: width, livePositionValue: inputArrayOfValue}
}

const convertValueToCoordinate = function(input,length){
  return input.map(x => [Math.floor((x-1)/length),(x-1)%length]);
}


module.exports = {
  repeatCharacter,
  makeHorizontalBorder,
  createObject,
  filterNeighbours,
  getNeighboursFirstColumn,
  getNeighboursLastColumn,
  getNeighboursMiddleColumn,
  convertCoordinateToValue,
  convertValueToCoordinate}
