var Series = function(digits) {
	/* A series of digits */
	this.digits = digits.split('').map(function(e) {return parseInt(e);
  });
};

Series.prototype.slices = function(size) {
	/* Slices digits into groups */
	if(this.digits.length < size)
		throw new Error("Slice size is too big.");
	var slices = [];
	for(var i = 0; i + size <= this.digits.length; i++ ) {
		slices.push(this.digits.slice(i, i + size));
	}
	return slices;
};

module.exports = Series;
