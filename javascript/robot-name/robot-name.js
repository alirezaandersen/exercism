var usedNames = {};

var Robot = function(){
  this.name = generateName();
};

Robot.prototype.reset = function(){
  this.name = generateName;
};

function generateName() {
  var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "0123456789".split("");
  var name = `${getRandom(letter)}${getRandom(letter)}${getRandom(numbers)}${getRandom(numbers)}${getRandom(numbers)}`;

  if(usedNames[name]){
    return generateName();
  } else {
    usedNames[name] = true;
    return name;
  }
}

function getRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = Robot;
