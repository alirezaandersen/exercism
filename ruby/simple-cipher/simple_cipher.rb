class Cipher
  attr_reader :key

  def initialize(key = "aaaaaaaaaa")
    validate_key(key)
    @key = key
  end

  def encode(string)

  end 


  private

  def validate_key(key)
    raise ArgumentError unless key.match(/^[a-z]+$/)
  end
end
