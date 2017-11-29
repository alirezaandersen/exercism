class Queens
  attr_reader :white, :black

  def initialize(opts)
    @white = QueenAttack.new(opts[:white]) if opts[:white]
    @black = QueenAttack.new(opts[:black]) if opts[:black]
  end

  def attack?
    on_same_row?
  end

  def on_same_row?
    white.row == black.row
  end

end

class QueenAttack
  attr_reader :row, :column

  def initialize(position)
    raise ArgumentError if position.any? { |x| x < 0 || x > 7 }
    @row = position[0]
    @column = position[1]
  end
end


module BookKeeping
  VERSION = 2
end
