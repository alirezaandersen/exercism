
var dayTime = 24 * 60 * 60;
var earthYear = 365.25 * dayTime;
var mercuryYear = 0.2408467 * earthYear;
var venusYear = 0.61519726 * earthYear;
var marsYear = 1.8808158 * earthYear;
var jupiterYear = 11.862615 * earthYear;
var saturnYear = 29.447498 * earthYear;
var uranusYear = 84.016846 * earthYear;
var neptuneYear = 164.79132 * earthYear;

var SpaceAge = function(digit){
  this.seconds = digit;
};

SpaceAge.prototype.formatPlanetAge = function(planet){
   return Math.round((this.seconds / planet) * 100) / 100;
 };

SpaceAge.prototype.onEarth = function(){
  return this.formatPlanetAge(earthYear);
};

SpaceAge.prototype.onMercury = function(){
  return this.formatPlanetAge(mercuryYear);
};

SpaceAge.prototype.onVenus = function(){
  return this.formatPlanetAge(venusYear);
};

SpaceAge.prototype.onMars = function(){
  return this.formatPlanetAge(marsYear);
};

SpaceAge.prototype.onJupiter = function(){
  return this.formatPlanetAge(jupiterYear);
};

SpaceAge.prototype.onSaturn = function(){
  return this.formatPlanetAge(saturnYear);
};

SpaceAge.prototype.onUranus = function(){
  return this.formatPlanetAge(uranusYear);
};

SpaceAge.prototype.onNeptune = function(){
  return this.formatPlanetAge(neptuneYear);
};

module.exports = SpaceAge;
