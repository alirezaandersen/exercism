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
    converter = []
    mathematic_parser.select do |s|
      converter << operators(s)
      # binding.pry
    end
    binding.pry # mathematic_parser.map {|s| s.gsub(/plus/," +")}
  end

  def mathematic_parser
    question.scan(/\-?\d+|plus|minus|divided by|multiplied by/)
  end

  def operators(index)
    if  index.include?("-") || index =~ /\A\d+\z/
      return index.to_i
    end

    case index
    when 'plus' then :+
    when 'minus' then :-
    when 'multiplied by' then :*
    when 'divided by' then :/
    end
  end
end
