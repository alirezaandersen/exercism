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


end
