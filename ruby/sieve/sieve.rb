class Sieve
	# attr_reader :primes

  def initialize(len)
    @primes = [nil, nil, *2..len]
    (2..len**0.5).each do |n|
      (n**2..len).step(n) { |m| @primes[m] = nil } if @primes[n]
    end
    @primes.compact!
  end
end

module BookKeeping
  VERSION = 1
end
