var Queens = function(){
	/* Queens on a chess board */
	this.white = (args && args.white) || [0, 3];
	this.black = (args && args.black) || [7, 3];
	if(this.white === this.black)
		throw "Queens cannot share the same space";
}

Queens.prototype.toString = function() {
	/* String representation of the chess board */
};

module.exports = Queens;
