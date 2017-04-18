class Say

  attr_reader :value

    def initialize(value)
      @value = value
    end

    def in_english
      guard_range

      return 'zero' if value.zero?

      chunks.join(' ').squeeze(' ').strip
    end

private

def guard_range
  unless in_range?
    message = 'Number must be between 0 and 999,999,999,999 inclusive.'
    fail ArgumentError.new(message)
  end
end

end
