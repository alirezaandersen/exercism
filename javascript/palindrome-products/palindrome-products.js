var Palindromes = function(args){
  /* Pairs of numbers that when multipied are palindromes */
	this.maxFactors = args['maxFactor'];
	this.minFactor = args['minFactor'] || 1;
};


function is_palindrome(str) {
	for(var i = 0; i < (str.length / 2); i++) {
		if(str[i] != str[str.length - i - 1])
			return false;
	}
	return true;
}
module.exports = Palindromes;
