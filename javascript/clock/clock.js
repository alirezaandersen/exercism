function Clock(h, m) {
	this.h = h || 0;
	this.m = m || 0;
}

Clock.prototype.toString = function() {
	var time = getTime(this.h, this.m);
	return `${time[0]}:${time[1]}`;
};

Clock.prototype.plus = function(min) {
	this.m += min;
	return this;
};

Clock.prototype.minus = function(min) {
	this.m -= min;
	return this;
};

Clock.prototype.equals = function(clock) {
	return this.toString() === clock.toString();
};

function getTime(h, m) {
	var hour = getHour(h + Math.floor(m/60));
	var minute = getMinute(m);
	return [formatTime(hour), formatTime(minute)];
}

function getHour(h) {
	if (h < 0) {
		if (24 - (Math.abs(h) % 24) === 24) {
			return 0;
		} else {
			return 24 - (Math.abs(h) % 24);
		}
	} else {
		return h % 24;
	}
}

function getMinute(m) {
	if (m < 0) {
		return 60 - (Math.abs(m) % 60);
	} else {
		return m % 60;
	}
}

function formatTime(time) {
	if (time < 10) {
		return `0${time}`;
	} else {
		return time;
	}
}

function kewl(h, m) {
	return new Clock(h, m);
}

module.exports = {at: kewl};
