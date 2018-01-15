class Poker

  def initialize(hand_arrays)
      @hands = hand_arrays.map { |hand_array| Hand.new(hand_array) }
  end

end


class Hand

  def initialize(hand_array)
    @hand_array = hand_array
    @cards = hand_array.map { |rank_and_suit| Card.new(rank_and_suit) }
  end
  
end

class Card

  attr_reader :rank, :suit

  def initialize(rank_and_suit)
   @rank = rank_and_suit[0..-2]
   @suit = rank_and_suit[-1]
 end

  RANK_VALUES = {'2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6,
                 '7' => 7, '8' => 8, '9' => 9, '10' => 10,
                 'J' => 11, 'Q' => 12, 'K' => 13, 'A' => 14}

  def rank_values
    RANK_VALUES[rank]
  end

end
