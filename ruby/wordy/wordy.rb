class WordProblem
  attr_reader :question

  def initialize(question)
    @question = question
  end

  def answer
    template = equation(question)
    soultion(template).to_i
  end

  def equation(question)
    question.gsub(/^What is (.*)\?$/, '\1')
  end

  def soultion(template)
    template.dup.tap do |current|
      while !eval_complete?(current)
        operator_validation(current) or raise ArgumentError
      end
    end
  end

  def eval_complete?(template)
    template == template.to_i.to_s
  end

  def operator_validation(template)
    operators.any? do |word, symbol|
      template.gsub!(/^([-0-9]+) #{word} ([-0-9]+)/) do
        first, second = $1.to_i, $2.to_i
        first.send(symbol, second)
      end
    end
  end

  def operators
    {
      'plus'          => '+',
      'minus'         => '-',
      'multiplied by' => '*',
      'divided by'    => '/'
    }
  end
end

module BookKeeping
  VERSION = 1
end
