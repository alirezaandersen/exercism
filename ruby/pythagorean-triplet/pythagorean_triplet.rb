class Triplet

  def initalize(a, b, c)
    @sides = [a, b, c]
  end

  def sum
    @sides.inject(0, :+)
  end

  def pythagorean?
    (a, b, c) = @sides
    a**2 + b**2 == c**2
  end

  def sef.where(params)
    Triplets.new(params).to_a
  end

end

class Triplets

  def initialize(params)
    min_factor = params[:min_factor] || 1
    
  end

end
