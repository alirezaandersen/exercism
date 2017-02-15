var TwoBucket = function(sizeOne, sizeTwo, goal, starterBucket) {
	/* Runs the two bucket problem */
  this.goalBucketSize = (starterBucket == "one" ? sizeOne : sizeTwo);
	this.otherBucketSize = (starterBucket == "one" ? sizeTwo : sizeOne);
	this.goalBucket = starterBucket;
	this.goal = goal;
};

TwoBucket.prototype.moves = function() {
	/* Fills buckets until one contains a certain amount of water */
  this.waterInGoal = 0;
  this.otherBucket = 0;

  for(var moves = 0; this.goal != this.waterInGoal; moves++) {
  		// Fill an empty goal bucket
  		if(this.waterInGoal === 0)
  			this.waterInGoal = this.goalBucketSize;
  		// Empty a full other bucket
  		else if(this.otherBucket == this.otherBucketSize)
  			this.otherBucket = 0;
  		// Pour from the goal bucket into the other bucket
};

module.exports = TwoBucket;
