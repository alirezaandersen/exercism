class Matrix

  attr_reader :rows, :columns

  def initalize(input)
    @rows = input.split("\n").map { |r| r.split(" ").map(&:to_i) }
  end
end
