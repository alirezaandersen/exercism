require 'pry'

class ETL

  def self.transform(old)
    # h = {}; h[old[1].first.downcase] = old.first[0]
    # h
    data = {}
    o = old.each do |num, alph|
      alph.each do |key|
        data[key.downcase] = num
      end
    end
    # binding.pry
    data 
    # binding.pry
  end

end
