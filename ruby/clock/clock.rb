class Clock

  def self.at(hour, minute)
    Clock.new(hour, minute)
  end

  def initialize(hour, minute)
      @minutes = hour * 60 + minute
  end

  def +(hour=0, minute)
    @minutes += hour * 60 + minute
    self
  end

  def ==(clock2)
    to_s == clock2.to_s
  end  

end


module BookKeeping
  VERSION = 2
end