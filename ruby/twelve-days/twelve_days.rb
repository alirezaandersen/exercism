module TwelveDays

  def self.song
    verses(1, 12)
  end

  def self.verses(first, last)
    first.upto(last).map do |number|
      verse(number)
    end.join("\n")
  end

  def self.verse(number)
    case number
    when 1
      "On the first day of Christmas my true love gave to me, a Partridge in a Pear Tree.\n"

    end
  end 
end
