require 'pry'
class TwoFer

  def self.two_fer(name = nil)
    if name != nil
      "One for #{name}, one for me."
    else
      "One for you, one for me."
    end
  end
  
end


module BookKeeping
  VERSION = 1
end
