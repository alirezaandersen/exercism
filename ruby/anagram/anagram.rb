class Anagram

  def initialize(word)
    @word       = word.downcase
    @word_chars = @word.chars.sort
  end

  

end
