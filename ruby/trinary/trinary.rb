require 'pry'

class Trinary
  POWER = 3

  def initialize(numbers)
    numbers = "0" unless numbers.match(/\A[012]+\z/)
    @numbers = numbers.reverse.chars
  end

  def to_decimal
    decimal = 0
    @numbers.each_with_index do |number, index|
      decimal += number.to_i * (POWER ** index)
    end
    decimal
  end
end

module BookKeeping
  VERSION = 1
end
