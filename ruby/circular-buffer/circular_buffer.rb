require 'pry'

class CircularBuffer

  class BufferEmptyException < StandardError; end
  class BufferFullException < StandardError; end

  def initialize(size)
    @buffer = Array.new(size)
    @size = size
    @start = 0
    @end = 0
    @full = false
  end

  def write(value)
    raise BufferFullException if full?

    @buffer[@end] = value
    @end = (@end + 1) % @size
    @full = true if @end == @start
  end

  def read
    raise BufferEmptyException if empty?

    value = @buffer[@start]
    @buffer[@start] = nil
    @start = (@start + 1) % @size
    @full = false
    value
  end

  def write!(value)
    if full?
      @start = (@start + 1) % @size
    end
    @buffer[@end] = value
    @end = (@end + 1) % @size
    @full = (@start == @end)
  end

  def clear
    @buffer = Array.new(@size)
    @start = 0
    @end = 0
    @full = false
  end

  private

  def full?
    @full
  end

  def empty?
    !@full && @start == @end
  end
end
