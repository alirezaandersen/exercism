class Robot

  attr_accessor :x, :y, :bearing

  def at(x, y)
    self.x = x
    self.y = y
  end

  def coordinates
    [x, y]
  end

  def orient(direction)
    fail ArgumentError unless cardinal_directions.include?(direction)
    self.bearing = direction
  end

  def advance
   if bearing == :north
     self.y += 1
   elsif bearing == :south
     self.y -= 1
   elsif bearing == :west
     self.x -= 1
   else
     self.x += 1
   end
 end

 def turn_right
   turn(:+)
 end

 def turn_left
   turn(:-)
 end

 private
end
