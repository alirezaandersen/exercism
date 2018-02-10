class Robot

  attr_accessor :x, :y, :bearing

  def at(x, y)
    self.x = x
    self.y = y
  end

  def coordinates
    [x, y]
  end

end
