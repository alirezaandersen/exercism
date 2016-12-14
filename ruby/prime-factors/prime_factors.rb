require 'prime'

class PrimeFactors

  def self.for(n)
   divisors = Prime.prime_division(n).flat_map do |factor, power|
      [factor] * power
    end
    divisors
  end

end
