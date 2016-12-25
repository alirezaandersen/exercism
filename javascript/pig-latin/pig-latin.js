
function translate(phrase) {
	/* Translates a phrase into piglatin */
	return phrase.split(' ').map(pigize).join(' ');
}

module.exports = { translate: translate };
