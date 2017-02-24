class Bst
  attr_reader :data, :left, :right
  def initialize(value)
    @data  = value
    @left  = nil
    @right = nil
  end

  def insert(value)
    if value <= @data
      @left.insert(value) if @left != nil
      @left = Bst.new(value) if @left == nil
    else
      @right.insert(value) if @right != nil
      @right = Bst.new(value) if @right == nil
    end
  end

end

module BookKeeping
  Bst::VERSION = 1
end
