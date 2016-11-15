var BigInt = require('./big-integer');

var Grains = function() {

};

// Grains.prototype.square = function(num) {
//   var total = 1;
//   for (var i = 1; i <= num; i++) {
//     if (num === 1) {
//       return total.toString();
//     }
//     else {
//       total = (i - 1) * 2;
//     }
//   }
//   return total.toString();
// };

// Grains.prototype.square = function(number) {
// return ""+Math.pow(2,(number-1));
// };

Grains.prototype.square = function(number) {
  return BigInt(2).pow(number - 1).toString();
};

Grains.prototype.total = function() {
  return BigInt(2).pow(64).prev().toString();
};

module.exports = Grains;
