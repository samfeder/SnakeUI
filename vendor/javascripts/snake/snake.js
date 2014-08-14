var _ = require('underscore')

var Coords = require("./coords")
var Board = require("./board")


function Snake () {
 this.dir = null;
 this.head_pos = null;
 this.segments = [];
 this.generate_coords();
 this.move()
}

Snake.prototype.move = function () {

}

Snake.prototype.turn = function () {

}