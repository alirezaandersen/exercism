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
    when 2
      <<-LINES
I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
      LINES
    when 3
      <<-LINES
I know an old lady who swallowed a bird.
How absurd to swallow a bird!
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
      LINES
    when 4
      <<-LINES
I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
      LINES
    when 5
      <<-LINES
I know an old lady who swallowed a dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
      LINES

end
