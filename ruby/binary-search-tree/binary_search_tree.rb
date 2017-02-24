class Bst
  attr_reader :data, :left, :right
  def initialize(value)
    @data  = value
    @left  = nil
    @right = nil
  end

end

module BookKeeping
  Bst::VERSION = 1
end
