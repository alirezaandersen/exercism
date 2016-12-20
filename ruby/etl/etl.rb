require 'pry'

class ETL

  def self.transform(old)
    data = {}
    old.each do |num, alph|
      alph.each do |key|
        data[key.downcase] = num
      end
    end
    data
  end

end
 thanks bro
 
