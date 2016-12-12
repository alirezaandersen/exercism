require "pry"

class Series

  attr_reader :num

  def initialize(num)
    @num = convert_to_integer(num)
  end

  def slices(num_array)
    if num_array > num.length
      fail ArgumentError.new('Not enough digits')
    end
    results = []
    i = -1
    begin
      i += 1
      i2 = i + num_array -1
      results << num[i..i2]
    end while i2 < num.size - 1
    results
  end

  def convert_to_integer(num)
    num.chars.map(&:to_i)
  end

end
