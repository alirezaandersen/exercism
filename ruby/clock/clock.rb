class Clock

  def self.at(hour, minute)
    Clock.new(hour, minute)
  end

  def initialize(hour, minute)
      @minutes = hour * 60 + minute
  end
    
end


module BookKeeping
  VERSION = 2
end
