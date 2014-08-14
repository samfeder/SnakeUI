function Board (snake) {
  this.snake = snake;
  this.apples = []
}

Board.APPLES = 5

Board.prototype.generateApples = function() {
  for (var i = 0; i < _.uniq(this.apples).length; i++){
    this.apples.push([Math.floor(Math.random()*10),
                      Math.floor(Math.random()*10)])
  }
  this.apples = _.uniq(this.apples)
}

Board.prototype.generateBoard = function(){}

module.exports = Board;