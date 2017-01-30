
var CustomSet = function(items) {
	/* A set object */
	this.items = [];
	for(var i = 0; i < (items ? items.length : 0); i++)
		this.put(items[i]);
};



CustomSet.prototype.subset = function(set_b) {
	/* All elements of one set are contained in this set */
	return set_b.toList().every(function(element) {return this.member(element)}, this);
};

module.exports = CustomSet;
