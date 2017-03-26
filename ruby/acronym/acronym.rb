class Acronym
  def self.abbreviate(phrase)
    phrase.scan(/(\b[A-Za-z])|((?<=[a-z])[A-Z])/).flatten.compact.join.upcase
  end
end

module BookKeeping
  VERSION == 2
end
