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

end
