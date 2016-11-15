function getOnlyDigits(input) {
  return input.replace(/[^\d]/g, '');
}

var PhoneNumber = function(number){
  this.num = number;
};

PhoneNumber.prototype.number = function(){
  var parsedNumber = getOnlyDigits(this.num);
  if (parsedNumber.length === 10){
    return parsedNumber;
  }
  else if (parsedNumber.length === 11 && parsedNumber[0] === "1"){
    return parsedNumber.slice(1);
  }
  else {
    return '0000000000';
  }
};

PhoneNumber.prototype.areaCode = function(){
  return this.num.slice(0,3);
  };

PhoneNumber.prototype.toString = function(){
    return ['(',this.number().slice(0,3),')',' ',this.number().slice(3,6),'-',this.number().slice(6)].join('');
};

module.exports = PhoneNumber;
