var WordProblem = function(){
  /* Solves mathmatical word problems */
  this.text = text;
  this.operators = {
      "plus" : '+'
  };
  this.form = new RegExp("^What is (-?\\d+(?: (?:" + Object.keys(this.operators).join("|") + ") -?\\d+)+)\\?$");
};


module.exports = WordProblem;
