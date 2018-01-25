class Deque

  def initialize
    @front = nil
  end

  def push(value)

  end

end

class Element

  attr_accessor :prev
  attr_accessor :next
  attr_reader :datum

  def initialize(datum, next_element = nil, prev = nil)
    @datum = datum
    @next = next_element || self
    @prev = prev || self
  end
end
