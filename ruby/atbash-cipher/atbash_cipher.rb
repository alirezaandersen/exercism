require 'pry'
module Atbash

  @@letters = "abcdefghijklmnopqrstuvwxyz"
  @@clean = /[^a-z0-9]/
  @@chunk = /.{1,5}/

  def self.encode(input)
     clean_input = input.downcase.gsub(@@clean, '')
     trade_char = clean_input.tr(@@letters, @@letters.reverse)
     scan_input = trade_char.scan(@@chunk).join(' ')
  end
end
