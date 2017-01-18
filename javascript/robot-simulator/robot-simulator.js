/* A robot to that follows simple instructions */
var Robot = function() {};

// Directions the robot can face and associated vectors
var directions = [ 'north', 'east', 'south', 'west' ];
var vectors = [[0, 1], [1, 0], [0, -1], [-1, 0]];

Robot.prototype.orient = function(direction) {
	/* Sets the direction of the robot */
  if(directions.indexOf(direction) == -1)
		throw "Invalid Robot Bearing";
	this.bearing = direction;
};

Robot.prototype.turnRight = function() {
	/* Changes the bearing one step to the right */
  var i = directions.indexOf(this.bearing);
	this.bearing = directions[(i + 1) % directions.length];
};

Robot.prototype.turnLeft = function() {
	/* Changes the bearing one step to the left */
  var i = directions.indexOf(this.bearing);
	this.bearing = directions[(i + directions.length - 1) % directions.length];
};
module.exports = Robot;
