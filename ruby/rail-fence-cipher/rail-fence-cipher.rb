class RailFenceCipher
  VERSION = 1
  def self.encode(message, rails)
    return message if message.empty? || rails == 1
    empty_fences = create_empty_fences_array(message, rails)
    zig_zag_array = populate_fences_array(message, rails, empty_fences)
    zig_zag_array.flatten.join
  end


end
