require 'pry'
class Triangle

  attr_reader :uniq_sides

  def initialize(sides)
    @uniq_sides = sides.uniq
    if illegal_size?
      @uniq_sides = []
    end
  end

  def isosceles?
    @uniq_sides.size.between?(1, 2)
  end

  def equilateral?
    @uniq_sides.size == 1
  end

  def scalene?
    @uniq_sides.size == 3
  end

  private

  def illegal?
    invalid_length_side? || violates_inequality?
  end

  def violates_inequality?
    a, b, c = sides
    a + b <= c || a + c <= b || b + c <= a
  end

  def invalid_length_side?
    sides.any? { |side| side <= 0 }
  end

end

module BookKeeping
  VERSION = 1
end
