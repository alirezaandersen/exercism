var Series = function(digits) {
	/* A series of digits */
  if (!digits.match(/^\d*$/g)) { throw new Error('Invalid input.'); }
	this.digits = digits.split('').map(function(e) {return parseInt(e);});
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

Series.prototype.largestProduct = function(size) {
	/* The largest group when digits of slices are multipled together */
  if (size < 0) {throw new Error('Invalid input.');}
	return Math.max.apply(null, this.slices(size).map(multiply));
};

function multiply(numbers) {
	/* Multiples all elements of an array together */
	return numbers.reduce(function(total, element) {
		return total * element;
	}, 1);
}

module.exports = Series;
