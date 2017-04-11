class Hexadecimal

  attr_reader :digits

  def initialize(decimal)
    @digits = decimal.reverse.chars
  end

end
