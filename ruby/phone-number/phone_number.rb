require 'pry'
class PhoneNumber

  def initialize(str)
    @parsed_number = get_only_digits(str)
  end

  def number
    if @parsed_number.length == 10
      @parsed_number
    elsif @parsed_number.length == 11 && @parsed_number.slice(0) === "1"
       @parsed_number[1..-1]
    else
      '0000000000'
    end
  end

  def area_code
    @parsed_number[0..2]
  end

  def to_s
  "(" + number[0..2]+")" + " " + number[3..5] + "-" + number[6..-1]
  end

  def get_only_digits(str)
    return '0' * 10 if str.match(/[a-zA-Z]/)
    str.gsub(/[^\d]/, '')
  end
end
