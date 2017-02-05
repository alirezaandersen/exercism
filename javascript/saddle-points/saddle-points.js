var Matrix = function(matrix){
  /* A 2nd Matrix Class*/
  this.rows = matrix.split("\n").map(function(row){
    return row.split(" ").map(function(e){
      return pareInt(e);
    });
  });
  
};

module.exports = Matrix;
