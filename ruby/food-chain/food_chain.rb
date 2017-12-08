module BookKeeping
  VERSION = 2
end

module FoodChain
  def self.song
    verses(1, 8)
  end

  def self.verses(lower_bound, upper_bound)
    (lower_bound..upper_bound).map { |i| verse(i) }.join("\n")
  end

  def self.verse(number)
    case number
    when 1
      <<-LINES
I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
      LINES

end
