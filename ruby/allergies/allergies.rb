class Allergies

  ALLERGENS = %w(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats)

  def initialize(score)
    @score = score
  end

  def allergic_to?(item)
    0 != @flags & 1 << ALLERGENS.find_index(item)
  end

  def list
    ALLERGENS.select { |i| allergic_to?(i) }
  end
end
