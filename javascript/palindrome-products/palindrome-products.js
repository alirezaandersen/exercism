var Palindromes = function(args){
  /* Pairs of numbers that when multipied are palindromes */
	this.maxFactors = args['maxFactor'];
	this.minFactor = args['minFactor'] || 1;
};

module.exports = Palindromes;
