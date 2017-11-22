class Meetup
  def initialize(month, year)
    @cal = (Date.new(year, month, 1)..Date.new(year, month, -1))
  end

  def day(meet_up, schedule)
    all_meet_ups = @cal.select { |date| date.send("#{meet_up}?") }
    case schedule
    when :first  then all_meet_ups[0]
    when :second then all_meet_ups[1]
    when :third  then all_meet_ups[2]
    when :fourth then all_meet_ups[3]
    when :last   then all_meet_ups.last
    # when :teenth
      all_meet_ups.select { |d| d.mday > 12 && d.mday < 20 }.first
    end
  end
end
