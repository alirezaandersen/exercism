require 'pry'
module Atbash

  @@letters = "abcdefghijklmnopqrstuvwxyz"
  @@clean = /[^a-z0-9]/
  @@chunk = /.{1,5}/

  def self.encode(input)
     clean_input = input.downcase.gsub(@@clean, '')
     binding.pry
  end
end
