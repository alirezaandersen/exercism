var weekDays = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");

var Meetup = function(year, month, day, nth) {
	/* Finds a meetup date */
  var intDay = weekDays.indexOf(day);

  switch (nth) {
    case "teenth":
      return find_day(year, month, intDay, 13, 19);
    case "1st":
      return find_day(year, month, intDay, 1, 7);
    case "2nd":
      return find_day(year, month, intDay, 8, 14);
    case "3rd":
      return find_day(year, month, intDay, 15, 21);
    case "4th":
      return find_day(year, month, intDay, 22, 28);
    case "5th":
      return find_day(year, month, intDay, 29, 31);
    case "last":
      return last(year, month, intDay);
  }
};


module.exports = Meetup;
