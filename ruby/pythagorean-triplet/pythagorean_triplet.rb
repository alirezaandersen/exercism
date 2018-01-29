class Triplet

  def initalize(a, b, c)
    @sides = [a, b, c]
  end

  def sum
    @sides.inject(0, :+)
  end 

end
