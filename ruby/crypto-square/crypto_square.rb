class Crypto
  def initialize(input)
    @input = input
  end

  def normalize_plaintext
    @input.downcase.gsub(/[^a-z0-9]/, '')
  end

end
