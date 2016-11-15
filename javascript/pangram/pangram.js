function Pangram(word){

this.isPangram = function(){

  var ar = Array.from(new Set(word.toLowerCase().split('')));
  newAr = ar.filter(function (val) {
    return /^[a-z]$/.test(val);
  });
  return newAr.length === 26;
};
}

module.exports = Pangram;
