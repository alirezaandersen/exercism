class Nucleotide
  attr_reader :acids

  def self.from_dna(strand)
    acids = strand.chars
    fail ArgumentError.new("Invalid DNA #{strand}") unless acids.all?(&validate)
    new(acids)
  end

  def self.validate
    proc { |acid| %w(A C G T).include?(acid) }
  end


end
