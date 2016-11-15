var Anagram = function(word){
	this.word = word.toLowerCase();
};

var formatWord = function(word){
return	word.toLowerCase().split("").sort().join("");
};

Anagram.prototype.matches = function(input){
	var wordArray = [];

	if(!(input instanceof Array)){
		input = Array.from(arguments);
	}

	var formattedAnagramWord = formatWord(this.word);

	for (anagramWord of input){
			var sortedAnagramWord = formatWord(anagramWord);
		if (sortedAnagramWord === formattedAnagramWord) {
				if(this.word.toLowerCase() !== anagramWord.toLowerCase())
				wordArray.push(anagramWord);
		}
	}
	return wordArray;
};



module.exports = Anagram;
