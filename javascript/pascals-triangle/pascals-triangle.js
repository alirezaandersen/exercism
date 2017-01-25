var Triangle = function(nRows) {
	/* Builds Pascals Triangle */
	this.rows = [];
	var row = [1];
	for(var i = 0; i < nRows; i++ ) {
		this.rows.push(row);
		this.lastRow = row;
		row = nextRow(row);
	}
};

function nextRow(currentRow) {
	/* Builds the next row of Pascals Triangle */
	var row = [];
	var prev = 0;
	for(var j = 0; j < currentRow.length; j++) {
		row.push(currentRow[j] + prev);
		prev = currentRow[j];
	}
	row.push(prev);
	return row;
}

module.exports = Triangle;
