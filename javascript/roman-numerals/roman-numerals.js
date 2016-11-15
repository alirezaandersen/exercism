  var intToRomNum = {   1: "I",   4:"IV",   5: "V",   9:"IX",
            10: "X",  40:"XL",  50: "L",  90:"XC",
            100: "C", 400:"CD", 500: "D", 900:"CM",
            1000: "M",
  };

  var toRoman = function(remainer) {
    /* Convert a decimal number to a roman numeral */

    var appendNumerals = function(total, decimal) {
      /* Appends as many roman numerals as possible */
      while (remainer >= decimal) {
        remainer -= decimal;
        total += intToRomNum[decimal];
      }
      return total;
    };

    var decimalNumbers = Object.keys(intToRomNum).sort(reverseNumeric);
      return decimalNumbers.reduce( appendNumerals, '');
  };

  var reverseNumeric = function(a, b){
    /* Reverse sort a numeric array */
    return b - a;
  };



module.exports = toRoman;
