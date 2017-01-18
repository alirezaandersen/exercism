/* A robot to that follows simple instructions */
var Robot = function() {};

// Directions the robot can face and associated vectors
var directions = [ 'north', 'east', 'south', 'west' ];
var vectors = [[0, 1], [1, 0], [0, -1], [-1, 0]];

Robot.prototype.orient = function(direction) {
	/* Sets the direction of the robot */
};

module.exports = Robot;
