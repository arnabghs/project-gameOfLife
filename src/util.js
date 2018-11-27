const repeatCharacter = function(symbol,width,delimeter){
  return new Array(width).fill(symbol).join(delimeter);
}

const makeHorizontalBorder = function(width){
  return "+"+repeatCharacter("---+",width,"");
}

module.exports = {repeatCharacter, makeHorizontalBorder}
