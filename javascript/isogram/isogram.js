var Isogram = function(word) {
    this.word = word.toString().toLowerCase();
};

Isogram.prototype.isIsogram = function() {
    var chars = this.word.split('');
    var charTable = {};

    while(chars.length > 0){
        var char = chars.pop();
        if( char != '-' && char != ' ')
            if(!chars[char])
                chars[char] = 1;
            else
                return false;
    }
    return true;
};

module.exports = Isogram;
