function inEnglish(num) {
	/* A number in english */
	if(0 > num || num >= 1000000000000)
		throw new Error('Number must be between 0 and 999,999,999,999.');

	if(num == 0)
		return "zero";

	var digit_groups = [];
	while(0 < num) {
		digit_groups.push(num % 1000);
		num = Math.floor(num / 1000);
	}
}


module.exports = {inEnglish: inEnglish};
