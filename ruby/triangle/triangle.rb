class Triangle


  def initialize(sides)
    @uniq_sides = [sides].uniq
  end

  def isosceles?
    if @uniq_sides.length == 2
      return true
    end
  end

  def equilateral?
    if @uniq_sides.length == 1
      return true
    end
  end

end
