
function formatText(text){
	var fText = text.replace(/[\n\t]/g,' ');
	fText = fText.trim();
	fText = fText.toLowerCase();
	return fText.replace(/\s+/g,' ');
}

var words = function(){
	this.count = function(text){
		//var counter = {};
		var counter = Object.create(null);
		var fText = formatText(text);
		fText.split(' ').forEach(function (word) {
  			counter[word] = counter[word] + 1 || 1;
		});



		return counter;
	};
};

module.exports = words;
