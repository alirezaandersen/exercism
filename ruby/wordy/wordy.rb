require 'pry'
class WordProblem

  attr_reader :question

  def initialize(question)
    @question = question
  end

  def answer
    if mathematic_parser.nil?
      raise ArgumentError
    end
  end

  def mathematic_parser
    question.scan(/\-?\d+|plus|minus|divided by|multiplied by/)
  end
end
