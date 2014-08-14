function Board (snake) {
  this.snake = snake;
  this.apples = this.generateApples()
  this.grid = this.generateBoard();
}

Board.APPLES = 5;
Board.DIMENSIONS = 10;

Board.prototype.generateApples = function() {
  var apples = [];
  while (_.uniq(apples).length < Board.APPLES) {
    apples.push([Math.floor(Math.random()*10),
                Math.floor(Math.random()*10)])
  }
  return _.uniq(apples)
}

Board.prototype.generateBoard = function(){
  for (var i = 0; i < board.DIMENSIONS; i++) {
    for (var j = 0; j < board.DIMENSIONS; j++) {
      [i]
    }
  }

}

module.exports = Board;