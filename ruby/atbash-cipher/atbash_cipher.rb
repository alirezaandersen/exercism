module Atbash

  @@letters = "abcdefghijklmnopqrstuvwxyz"
  @@clean = /[^a-z0-9]/
  @@chunk = /.{1,5}/

  def self.encode(input)
    input.downcase.gsub(@@clean, '')
  end
end
