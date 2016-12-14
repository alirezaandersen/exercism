require 'pry'

class Array

def keep
  kept = []
  each {|e| kept << e if yield(e) }
  kept
end

def discard
  kept = []
  each {|e| kept << e unless yield(e) }
  kept
end

end
