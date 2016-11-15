//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function(){};

var isShouting = function(input){
  newInput = input.replace(/[, ]/g,'');
  return isNaN(newInput.slice(0,-1)) && input.toUpperCase() === input;
};

var isSlient = function(input){
  return input.trim() === "";
};

var isQuestion = function(input){
    if( input.charAt(input.length-1) === '?'){
      return !isShouting(input);
    }
   return false;
};

 Bob.prototype.hey = function(input) {

  if (isSlient(input)){
    return "Fine. Be that way!";
  }
  else if(isQuestion(input)){
    return('Sure.');
  }
  else if(isShouting(input)){
    return "Whoa, chill out!";
  }
  else
  return "Whatever.";

 };

module.exports = Bob;
