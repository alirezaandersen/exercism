var Triangle = function(nRows){
  /* Builds Pascals Triangle */
  this.row = [];
  var row = [1];
  for(var i = 0 ; i < nRows; i++){
    this.row.push(row);
    this.lastRow = row;
    row = nextRow(row);
  }
};

module.exports = Triangle;
