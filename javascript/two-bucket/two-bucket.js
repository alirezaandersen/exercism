var TwoBucket = function(sizeOne, sizeTwo, goal, starterBucket) {
	/* Runs the two bucket problem */
  this.goalBucketSize = (starterBucket == "one" ? sizeOne : sizeTwo);
	this.otherBucketSize = (starterBucket == "one" ? sizeTwo : sizeOne);
	this.goalBucket = starterBucket;
	this.goal = goal;
};

TwoBucket.prototype.moves = function() {
	/* Fills buckets until one contains a certain amount of water */
};

module.exports = TwoBucket;
