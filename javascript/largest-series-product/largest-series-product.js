var Series = function(digits) {
	/* A series of digits */
	this.digits = digits.split('').map(function(e) {return parseInt(e);
  });
};

module.exports = Series;
