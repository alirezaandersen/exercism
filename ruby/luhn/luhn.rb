
class Luhn
  def self.valid?(string)
    string.delete!(' ')
    return false if string.size <= 1
    return false if string =~ /\D/

    digits_doubled = double_alternate_digits(string)
    sum = digits_doubled.reduce(:+)
    (sum % 10).zero?
  end

  def self.double_alternate_digits(string)
    digits = string.chars.map(&:to_i)
    digits.reverse.map.with_index do |digit, index|
      index.odd? ? double_digit(digit) : digit
    end
  end
end

module BookKeeping
  VERSION = 1
end
