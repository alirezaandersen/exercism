class Element

  attr_reader :datum
  attr_accessor :next

  def initialize(value)
    @datum = value
    @next = nil
  end

end

class SimpleLinkedList

  def initialize(array = nil)
    create_from_array(array)
  end

  private

  def create_from_array(array)
    array.each { |value| push(Element.new(value)) }
  end

end




module BookKeeping
  VERSION = 1
end
