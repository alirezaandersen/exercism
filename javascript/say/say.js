function inEnglish(num) {
  /* A number in english */
  	if(0 > num || num >= 1000000000000)
  		throw new Error('Number must be between 0 and 999,999,999,999.');

}


module.exports = {inEnglish: inEnglish};
