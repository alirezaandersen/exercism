module TwelveDays

  def self.song
    verses(1, 12)
  end

  def self.verses(first, last)
    first.upto(last).map do |number|
      verse(number)
    end.join("\n")
  end

end
