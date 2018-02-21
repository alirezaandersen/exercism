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
    when 2
      "On the second day of Christmas my true love gave to me, two Turtle Doves, and a Partridge in a Pear Tree.\n"
    when 3
      "On the third day of Christmas my true love gave to me, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n"
    when 4
      "On the fourth day of Christmas my true love gave to me, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n"
    when 5
"On the fifth day of Christmas my true love gave to me, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n"
    end
  end
end
