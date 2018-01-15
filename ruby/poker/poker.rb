class Poker

  def initialize(hand_arrays)
      @hands = hand_arrays.map { |hand_array| Hand.new(hand_array) }
  end

end


class Hand

  attr_reader :hand_array, :cards

  def initialize(hand_array)
    @hand_array = hand_array
    @cards = hand_array.map { |rank_and_suit| Card.new(rank_and_suit) }
  end

  def score
    [hand_score, card_score].flatten
  end

  private

  def hand_score
    scoring_hands.map.with_index { |scoring_hand, i| i if scoring_hand }.compact.max
  end

  def card_score
    five_high_straight? ? [5, 4, 3, 2, 1] : card_score_array
  end

  def card_score_array
    rank_count_hash
        .sort_by { |rank, count| [-count, -rank] }
        .map { |count_rank_array| count_rank_array[0] }
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
