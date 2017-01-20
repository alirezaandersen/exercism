function find_nth_prime(n) {
  /*Finds the Nth Prime number */
  if(n<=0)
    throw new Error("Prime is not possible");

  var primes;
	l: for (primes = [2], i = 3, root; primes.length < n; i += 2) {
    for (root = Math.sqrt(i), j = 0; primes[j] <= root; j++) {
			if (i%primes[j] === 0) continue l;
		}
		primes.push(i);
	}
	return primes [n - 1];
}


module.exports = { nth: find_nth_prime };
