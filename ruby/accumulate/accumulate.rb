class Array
  def accumulate
    out = []
    each { |i| out.push(yield(i)) }
    out
  end
end

module BookKeeping
  VERSION = 1
end 
