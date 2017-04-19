class Say

  attr_reader :value

  def initialize(value)
    @value = value
  end

  def in_english
    guard_range

    return 'zero' if value.zero?

    chunks.join(' ').squeeze(' ').strip
  end

  private

  def chunks
    billions, i = chop(value, ONE_BILLION)
    millions, i = chop(i, ONE_MILLION)
    thousands, i = chop(i, 1000)
    [
      Chunk.new(billions, 'billion'),
      Chunk.new(millions, 'million'),
      Chunk.new(thousands, 'thousand'),
      Chunk.new(i)
    ]
  end

  def chop(number, location)
    [number / location, number % location]
  end

  def guard_range
    unless in_range?
      message = 'Number must be between 0 and 999,999,999,999 inclusive.'
      fail ArgumentError.new(message)
    end
  end

  def in_range?
    value >= 0 && value < 10**12
  end
end
