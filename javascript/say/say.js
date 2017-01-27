function inEnglish(num) {
	/* A number in english */
	if(0 > num || num >= 1000000000000)
		throw new Error('Number must be between 0 and 999,999,999,999.');

	if(num === 0)
		return "zero";

	var digit_groups = [];
	while(0 < num) {
		digit_groups.push(num % 1000);
		num = Math.floor(num / 1000);
	}

return digit_groups.reduce(function(english, group, power) {
  if(group === 0)
    return english;
  return englishPower(group) + powers[power] + (english?" ":'') + english;
}, '');

}

var ones = ",one,two,three,four,five,six,seven,eight,nine".split(',');
var teens = ",eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(',');
var tens = ",,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninty".split(',');


module.exports = {inEnglish: inEnglish};
