
var CustomSet = function(items) {
	/* A set object */
	this.items = [];
	for(var i = 0; i < (items ? items.length : 0); i++)
		this.put(items[i]);
};

// Tests if item is in a set
CustomSet.prototype.member = function(item) { return this.items.indexOf(item) != -1; };
// Number of elements in the set
CustomSet.prototype.size = function() { return this.items.length; };
// Makes a list from a set
CustomSet.prototype.toList = function() { return this.items; };

CustomSet.prototype.subset = function(set_b) {
	/* All elements of one set are contained in this set */
	return set_b.toList().every(function(element) {return this.member(element);}, this);
};

module.exports = CustomSet;
