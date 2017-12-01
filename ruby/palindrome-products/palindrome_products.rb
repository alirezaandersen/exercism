class Palindromes

  attr_reader :range

  def initialize(options)
    max = options.fetch(:max_factor)
    min = options.fetch(:min_factor) { 1 }
    @range = (min..max)
  end

  def generate

  end

  def largest

  end 

end
