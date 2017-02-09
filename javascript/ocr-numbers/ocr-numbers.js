function convert(OCR_string) {
	/* Convert a line representation of digits into a string of digits */
}

function lines_to_characters(line) {
	/* Divides a set of lines into characters */
	var characters = [];
	for(var c = 0; c < (line[0].length) / 3; c += 1) {
		characters.push( line.map(function(row) {
			return row.slice(c * 3, c * 3 + 3);
		}) );
	}
	return characters.map(function(character) {return character.join("\n")});
}

module.exports = {convert: convert};
