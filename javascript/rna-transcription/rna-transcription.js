var dnaTranscriber;

module.exports = DnaTranscriber = (function() {

    function dnaTranscriber() {};

    dnaTranscriber.prototype.complements = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    dnaTranscriber.prototype.toRna = function(strand) {
        var complements = this.complements;
        return strand.split('').map(function(c) {
            return complements[c];
        }).join('');
    };

    return dnaTranscriber;
})();
