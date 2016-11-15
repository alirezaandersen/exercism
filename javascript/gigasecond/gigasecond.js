function Gigasecond(birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function() {
  seconds = this.birthday.getTime() / 1000;
  anniversary = seconds + Math.pow(10, 9);
  return new Date(anniversary * 1000);
}

module.exports = Gigasecond;
