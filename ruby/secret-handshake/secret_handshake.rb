require 'pry'
class SecretHandshake
  def initialize(flags)
    @flags = (flags.is_a? Integer) ? flags : 0
  end
end
