class QueenAttack
  attr_reader :rank, :file

  def initialize(position)
    raise ArgumentError if position.any? { |x| x < 0 || x > 7 }
    @rank = position[0]
    @file = position[1]
  end
end


module BookKeeping
  VERSION = 2
end
