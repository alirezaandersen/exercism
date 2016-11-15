var Acronyms = function(){

};

Acronyms.prototype.parse = function(phrase) {
  //  capitalizeEachWord(phrase);

 // var removeWhiteSpace = phrase.match(/\b(\w)/g).join();
 var removeWhiteSpace = capitalizeEachWord(phrase).match(/\b(\w)/g).join();
 console.log(removeWhiteSpace);
 var removeCommas = removeWhiteSpace.replace(new RegExp(/[^a-zA-Z:]/g),'');
 console.log(removeCommas);
 return removeCommas.toUpperCase();
};

  var capitalizeEachWord = function(phrase) {
    // return phrase.replace(/\b(\w)/g, function(txt) {
    return phrase.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase() ;
    });
  };


module.exports = new Acronyms;
