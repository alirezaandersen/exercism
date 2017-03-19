class RailFenceCipher

  def self.encode(message, rails)
    return message if message.empty? || rails == 1
    empty_fences = create_empty_fences_array(message, rails)
    zig_zag_array = populate_fences_array(message, rails, empty_fences)
    zig_zag_array.flatten.join
  end

  def self.create_empty_fences_array(message, rails)
    Array.new(rails) { Array.new(message.length) }
  end

  def self.populate_fences_array(message, rails, fences)
    row = 0
    row_direction = 1
    message.length.times do |column|
      fences[row][column] = message[column]
      row_direction = 1 if row == 0
      row_direction = -1 if row == (rails - 1)
      row += row_direction
    end
    fences
  end

end


module BookKeeping
  VERSION = 1
end
