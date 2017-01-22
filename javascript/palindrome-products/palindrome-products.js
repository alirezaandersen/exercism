var Palindromes = function(args){
  /* Pairs of numbers that when multipied are palindromes */
	this.maxFactors = args['maxFactor'];
	this.minFactor = args['minFactor'] || 1;
};

Palindromes.prototype.largest = function() {
	/* The largest product generated */
	var keys = Object.keys(this.palindromes);
	var max = Math.max.apply(null, keys);
	return {value: max, factors: this.palindromes[max]};
};

Palindromes.prototype.smallest = function() {
	/* The smallest product generated */
	var keys = Object.keys(this.palindromes);
	var min = Math.min.apply(null, keys);
	return {value: min, factors: this.palindromes[min]};
};

function is_palindrome(str) {
	for(var i = 0; i < (str.length / 2); i++) {
		if(str[i] != str[str.length - i - 1])
			return false;
	}
	return true;
}
module.exports = Palindromes;
