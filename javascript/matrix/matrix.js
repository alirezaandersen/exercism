var Matrix = function(matrix){
  /* A 2d matrix class */
  this.rows = matrix.split("\n").map( function(row) {
		return row.split(" ").map(function(e) { return  parseInt(e); });
	});
};

module.exports = Matrix;
