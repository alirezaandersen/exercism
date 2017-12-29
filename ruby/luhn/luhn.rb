
class Luhn
  def self.valid?(string)
    string.delete!(' ')
    return false if string.size <= 1
    return false if string =~ /\D/

    digits_doubled = double_alternate_digits(string)
    sum = digits_doubled.reduce(:+)
    (sum % 10).zero?
  end
end

module BookKeeping
  VERSION = 1
end
