var Triangle = function(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};

Triangle.prototype.kind = function(){
		//throw an error for these conditions
		if (this.side1 === 0 && this.side2 === 0 && this.side3 === 0){
    	console.log("i get here");
      throw new Error("");
    }
    else if(this.side1 < 0 || this.side2 < 0 || this.side3 < 0) {
    	console.log("i do NOT get here, this.side1 = ", this.side1, ", this.side2 = ", this.side2, ", this.side3 = ", this.side3 );
      throw new Error("");
    }

    sortTriangle(this.side1, this.side2, this.side3);
    //code below is normal code -- you only get here if nothing above was thrown

    if (this.side1 === this.side2 &&
        this.side2 === this.side3 &&
        this.side1 === this.side3){
        return 'equilateral';
     }
      else if (this.side1 === this.side2 ||
             this.side2 === this.side3 ||
             this.side1 === this.side3) {
             return 'isosceles';
     }
      else if (this.side1 !== this.side2 &&
                 this.side2 !== this.side3 &&
                 this.side1 !== this.side3) {
                 return 'scalene';
     }
};

var sortTriangle = function(side1, side2, side3){
  var sides = [side1, side2, side3].sort(compareNumber);
    if (sides[0] + sides[1] < sides[2] ) {
      throw new Error("");
    }
};

var compareNumber = function(a,b) {
  return a - b;
};


module.exports = Triangle;
