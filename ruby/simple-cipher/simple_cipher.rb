require 'pry'
class Cipher
  attr_reader :key

  def initialize(key = "aaaaaaaaaa")
    validate_key(key)
    @key = key
  end

  def encode(string)
    convert_string(string, :encode_char)
  end


  private

  def convert_string(string, method)
    string.bytes.each_with_index.map do |char, index|
      char_wrap(self.send(method, char, index))
    end.map(&:chr).join
  end

  def validate_key(key)
    raise ArgumentError unless key.match(/^[a-z]+$/)
  end
end
