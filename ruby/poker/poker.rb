class Poker

  def initialize(hand_arrays)
      @hands = hand_arrays.map { |hand_array| Hand.new(hand_array) }
  end

end


class Hand

end
