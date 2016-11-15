var Hamming = function () {};

Hamming.prototype.compute = function (a, b) {
	var arrA = a.split('');
	var arrB = b.split('');
	var count = 0;
	if (arrA.length !== arrB.length) {
		throw new Error('DNA strands must be of equal length.');
	} else {
		for (var i = 0; i < arrA.length; i++) {
			if (arrA[i] !== arrB[i]) {
				count++;
			}
		}
		return count;
	}
}

module.exports = Hamming;
