class Bst
  attr_reader :data, :left, :right
  def initialize(value)
    @data  = value
    @left  = nil
    @right = nil
  end

  def insert(value)

end

module BookKeeping
  Bst::VERSION = 1
end
