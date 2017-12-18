require 'pry'
class SecretHandshake
  def initialize(flags)
    @flags = (flags.is_a? Integer) ? flags : 0
  end

  @@items = {
    'wink'            => 1,
    'double blink'    => 2,
    'close your eyes' => 4,
    'jump'            => 8
  }
end
